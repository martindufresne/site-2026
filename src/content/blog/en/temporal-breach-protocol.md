---
title: Reversing Time to Hide a Secret - A Journey Into a Multi-Agent Safe
excerpt: Reversing Time to Hide a Secret - A Journey Into a Multi-Agent Safe
publishDate: 'Feb 26 2026'
isFeatured: true
tags:
  - Cybersecurity
translationSlug: mon-frigo-pirate
seo:
  image:
    src: '/temporalBreach.webp'
    alt: Temporal breach
---

![Temporal breach](/temporalBreach.webp)

Imagine you had to hide a gold marble in a pool filled with millions of identical plastic marbles. It’s easy: anyone can dive in and find it.

Now, imagine that you kick the pool, mix everything up, and on top of that, each marble changes place according to a precise mathematical dance that only you know. To an observer, the pool has become total chaos. But for you, it is enough to "rewind" the film so that the gold marble returns exactly to your hand.

This is the heart of my project: the **Temporal Breach Protocol**.

## The Problem: Locks You Can Break

Today, most of our secrets (passwords, files) are protected by very difficult mathematical problems, such as the factorization of large numbers. It’s solid… until a quantum computer arrives and solves the problem in a snap of a finger.

I wanted to explore another path. Not an equation, but a **dynamical system**.

## Step 1: Camouflage (Injection)

In my system, we start by creating a giant grid of 4096 cells (a “Lattice”). We hide our secret — the “Golden Agents” — in places that only you know. Everything else is filled with noise, fake agents. At this stage, the secret is there, but it is drowned in the crowd.

## Step 2: The "Grinder" (Weaving)

This is where the magic happens. We apply two layers of chaos:

1. **Shuffling**: We teleport each agent to the other side of the grid according to an ultra-complex sequence.
2. **Margolus' Dance**: We take small 2x2 blocks of cells and rotate them. By alternating these rotations, the information eventually disperses like a drop of ink in a glass of water.

After a few rounds, your secret has disappeared. It is no longer "somewhere", it is "everywhere" and "nowhere" at the same time.

## Step 3: The Temporal Breach (Decryption)

This is the Feynman part: Nature is reversible. If you know the exact dance, you can reverse the direction of rotation of the blocks and undo the teleports. By "rewinding" algorithmic time, the chaos suddenly orders itself. The golden agents return to their initial positions.

Once the bits are recovered, we pass them through a final grinder (SHA-256) to get the key that opens your AES-256 file.

## Why Does It Matter? (The Post-Quantum Future)

What is fascinating is that this chaos has no mathematical "weak point". A quantum computer can calculate fast, but it cannot "guess" the structure of chaos without knowing the key to the dance. My PoC proves that we can obtain 100% reversibility: not a single bit is lost in the storm.

## Conclusion: Science is Child's Play

This project is an academic **Proof of Concept (PoC)**. It is not yet the tool that will replace your password manager, but it is a demonstration that we can build digital fortresses using the laws of disorder and time.

As Feynman said: _“What I cannot create, I do not understand.”_ By creating this chaos and learning to tame it, we understand a little better how to protect our digital lives tomorrow.

**For the curious**: If you want to see the code, the diagram, or read the scientific paper (with all the mathematical equations), I have put everything open-source on my GitHub.
[https://github.com/martindufresne/poc-temporal-breach](https://github.com/martindufresne/poc-temporal-breach)
