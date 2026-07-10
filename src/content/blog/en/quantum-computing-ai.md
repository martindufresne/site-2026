---
title: I Taught a Quantum Computer to Correct Its Own Errors (And It Worked)
excerpt: How a pinch of AI beat a 30-year-old standard on an IBM processor.
publishDate: 'Feb 4 2026'
isFeatured: true
tags:
  - Quantum
seo:
  image:
    src: '/post-1.jpg'
    alt: A person standing at the window
---

![Dufresne Protocol Diagram](/protocole_Dufresne.png)

Imagine you possess two magic coins. Give one to Alice in Montreal and the other to Bob in Paris. If Alice spins her coin and gets "Heads", Bob's coin will instantly land on "Heads" too. No delay, no cheating. This is what we call quantum entanglement.

This is the foundation of the internet of the future: a completely unhackable network.

But there is a catch. In real life, these magic coins are fragile. If someone sneezes near Bob's coin, or if it gets a bit too hot in the room, the magic breaks. Bob's coin no longer aligns with Alice's. We call this **noise**.

And today, quantum computers (like those from IBM) are very noisy. It's like trying to whisper a secret to someone in the middle of a heavy metal concert.

## The Old Manual and Field Reality

Since 1996, physicists have had a recipe to fix this problem: "purification" (specifically the BBPSSW protocol). The idea is simple: we take two pairs of noisy coins, compare them, keep the good ones, and throw away the bad ones. It is an elegant, mathematical, and… rigid method.

That’s where I got skeptical.

This method assumes that the noise is "perfectly random". But on a real quantum processor (like IBM's Eagle chip that I used), noise isn't just pure randomness. It’s a physical defect: one qubit rotating a bit too fast to the left, another overheating, microwave interference…

Using the old 1996 protocol on a 2026 machine is like trying to repair a Ferrari with a Model T manual. It works a little, but it is far from optimal.

## My Idea: What If We Let the Machine Learn?

Instead of imposing a rigid correction on the computer ("Turn 90 degrees to the right!"), I asked myself a question: **What if we used AI so that the computer learns to compensate for its own defects?**

I created what I call the "Dufresne Protocol" (gotta name it something!). In practice, I inserted 18 small adjustment knobs into the quantum circuit. At first, these knobs are set randomly.
1. I send pairs of photons (simulated by qubits).
2. I measure how many arrive correctly.
3. I use an optimization algorithm (the same kind used to train ChatGPT) to turn the knobs slightly.
4. I repeat the process.

For the curious, here is what the "engine" of this protocol looks like. It is not just code; it is a physical architecture where I insert my corrections (the white blocks) before and after the core of the system:

![The Dufresne Protocol map. The white blocks are the areas where the AI is allowed to modify the circuit.](/protocole_Dufresne.png)
*<center>The Dufresne Protocol map. The white blocks are the areas where the AI is allowed to modify the circuit.</center>*

It's like tuning a guitar by ear. The computer "listens" to its own noise and adjusts its parameters to cancel it out. We don't force the correction; we find it.

## The Mathematical Beauty of It

I had to translate this intuition into rigorous mathematical language. This is the equation I am most proud of. It describes how my circuit (𝑈) wraps the classical operation with corrective rotations (ℛ) at the input and output:

![Dufresne Formula](/formula.png)

What this line tells is a story of cleaning: we take the signal, straighten it (ℛᵢₙ), purify it, and reorient it (ℛₘₑₐₛ) so that it is perfect upon arrival.

## The Moment of Truth: David vs. Goliath

Theory is fine, but does it work on a real machine?
I connected to the IBM Quantum cloud and reserved time on the ibm_fez processor (a 127-qubit beast). I launched two experiments:
1. The classic 1996 protocol.
2. My AI-trained "adaptive" protocol.

I held my breath waiting for the results.

The verdict came in. The classic protocol cleaned the signal with a residual error rate of **4.30%**. My protocol? It brought the error down to **3.62%**.

![In red, the error reduction. A 15.8% victory for the AI approach.](/error_reduction.png)
*<center>In red, the error reduction. A 15.8% victory for the AI approach.</center>*

This might seem small, but relatively, it is a **15.8% reduction in errors**. That is the difference between a message getting through and a message getting lost. The AI succeeded in finding micro-adjustments invisible to the naked eye to compensate for the physical flaws of the IBM chip.

## Why Does It Matter?

---

What this short experiment shows is that we do not need to wait for the "perfect" quantum computer to do useful things.

We are in the "NISQ" (*Noisy Intermediate-Scale Quantum*) era. Our machines are imperfect, noisy, and a bit temperamental. But by combining the brute force of quantum computing with the flexibility of Artificial Intelligence, we can clean up this noise.

We do not need to change the laws of physics. We just need better "glasses" to see through the fog. And AI is a great pair of glasses.

---

**For the curious**: If you want to see the code, the charts, or read the scientific paper (with all the mathematical equations), I have put everything open-source on my GitHub.
[https://github.com/martindufresne/dufresne-quantum-protocol](https://github.com/martindufresne/dufresne-quantum-protocol)

*Special thanks to the Qiskit and PennyLane teams for the incredible tools that allow a computer science teacher to play with atoms from his living room.*
