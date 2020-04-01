# Codecov exploration

I did stuff to check my understanding of codecov 🎓

## Experiment 1:  pseudo - base - base - head scenario

In this experiment I wanted to run a sanity check to make
sure I understood which commit would be chosen for diffing
in different situations:

Consider the following tree:

```
fe7 [HEAD -> master, origin/master]
```

`fe7` contains a function isPrime, with base cases 1 and 2,
and no tests. No coverage whatsoever for isPrime.

```
fe7 [origin/master] --- 925 [HEAD -> master]
```

`925` contains one test for base case isPrime(1). The test
succeeds. The commit is not pushed to [origin/master]

```
fe7 [origin/master] --- 925 [HEAD -> master]
  \
   \_ 4e2 [c-branch] (corresponding to "c" in docs)
```

`4e2` contains a test for the _second_ base case, isPrime(2),
but does _not_ contain a test for the first base case.

`cd master`
`merge c-branch`

Master looked like this:

```
fe7 [origin/master] --- 925 ---------- f67 [origin/master] (3-way merge)
  \
   \ ...
```

In this case, `fe7` is "pseudo", and 925 and f67 are "base" commits
that did not have coverage reports to use in diff.

I am able to manually verify that the difference in line coverage between
`fe7` and `f67` is +30.48%. 👍

## Experiment 2: pseudo - base - head scenario

In this experiment I wanted to create a cached coverage report for `925`
and show that, although the code pushed post-merge is the same, that
the coverage % would change because there is only one base layer, as
opposed to 2:


I put the tree into the following state:

```
fe7 --- 925 [origin/master] [HEAD -> master]
  \
   \- 4e2 [c-branch] (corresponding to "c" in docs)
```

After merging, the tree looked like this:

```
fe7 --- 925 --- 4e2 --- 925 [origin/master] [HEAD -> master] (fast-forward merge)
```

My understanding is that 925 is "pseudo", 4e2 is "base", and 925 is head,
and the diff this time happened between 925 and 925:

I verified locally and remotely that this time the coverage was
not +30.48%, but was +13.33% 👍

⚠️
I experienced a behavior that I wasn't expecting: after pushing
I got an error message saying: "Unable to find commit in GitHub".. perhaps
because I did a force push and removed a previously-pushed commit?
⚠️


