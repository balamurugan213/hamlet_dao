---
title: Smart Contract Explained Smart Contract Explained
metaTitles: Cryptography
image: https://thumbs.dreamstime.com/b/illustration-internet-security-data-protection-secure-data-exchange-cryptography-vector-icon-style-83625900.jpg
description: Cryptography is the study of secure communications techniques...
date: 21 FEB 2021
---

# Cryptography

Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents. The term is derived from the Greek word kryptos, which means hidden. ... If the message is intercepted, a third party has everything they need to decrypt and read the message.

## SYMMETRIC KEY CIPHERS

Symmetric ciphers use the same cryptographic keys for both encryption of plaintext and decryption of ciphertext. They are faster than asymmetric ciphers and allow encrypting large sets of data.

**A block cipher** is one in which a block of plaintext is treated as a whole and used to produce a cipher text block of equal length. Typically, a block size of 64 or 128 bits is used.

There are three critical aspects of block cipher design:

1. Number of rounds,
2. Design of the function F
3. Key scheduling.

## DES(Data encryption standards)

For DES, data are encrypted in 64-bit blocks using a 56-bit key. The algorithm transforms 64-bit input in a series of steps into a 64-bit output. The same steps, with the same key, are used to reverse the encryption.

### SDES

The overall structure of the simplified DES shown in Figure 2.5. The S-DES encryption algorithm takes an 8-bit block of plaintext (example: 10111101) and a 10-bit key as input and produces an 8-bit block of ciphertext as output.
The S-DES decryption algorithm takes an 8-bit block of ciphertext and the same 10-bit key used to produce that ciphertext as input and produces the original 8-bit block of plaintext.

**Attacks on DES:**
Two approaches are:

1. **Differential crypt analysis**
    
    Differential cryptanalysis is the first published attack that is capable of breaking DES in less than 2^55 complexities. The need to strengthen DES against attacks using differential cryptanalysis played a large part in the design of the S-boxes and the permutation P.
    
    One of the most significant recent (public) advances in cryptanalysis
    
    Powerful method to analyze block ciphers
    
    Used to analyze most current block ciphers with varying degrees of success
    
2. **Linear crypt analysis**
    
    This attack is based on the fact that linear equation can be framed to describe the transformations.
    The principle of linear crypt analysis is as follows Length of CT and PT =n bits;
    key=mbit
    Block of cipher text is c[1]c[2]…c[n]; Block of key is k[1]k[2]….k[m]
    A[I,j,..k] = A[i] A[j] . A[k]
    
    Can attack DES with 2^47 known plaintexts, still in practice infeasible
    
    Find linear approximations with prob p != ½
    
    P[i1,i2,...,ia](notion://www.notion.so/+)c[j1,j2,...,jb] = k[k1,k2,...,kc]Where ia, jb, kc are bit locations in p, c, k
    

**Meet-in-the-Middle Attack**
The use of double DES results in a mapping that is not equivalent to a single DES encryption. But there is a way to attack this scheme, one that does not depend on any particular property of DES but that will work against any block encryption cipher. This algorithm, known as a meet-in-the-middle attack.
It is based on the observation that,

> C=E(K2,E(k1,P)) then  X=E(K1,P)= D(K2,C)
> 

For any given plaintext P, there are 264 possible cipher text values that could be produced by double DES. Double DES uses, in effect, a 112-bit key, so that there are 2112 possible keys.

To overcome the meet-in-the-middle attack is to use three stages of encryption with three different keys.

- The function follows an encrypt-decrypt-encrypt (EDE)sequence

![CH-2%20614e0/Untitled.png](CH-2%20614e0/Untitled.png)

- 3DES with two keys is a relatively popular alternative to DES
- There are no practical cryptanalytic attacks on 3DES.
- The cost of a brute-force key search on 3DES is on the order of2112

---

## BLOCK CIPHER PRINCIPLES

There are three critical aspects of block cipher design:

1. Number of rounds,
2. Design of the function F
3. Key scheduling.

In particular, **Feistel proposed** the use of a cipher that alternates substitutions and permutations, where these terms are defined as follows:

**Substitution**: Each plaintext element or group of elements is uniquely replaced by a corresponding ciphertext element or group of elements.

**Permutation**: A sequence of plaintext elements is replaced by a permutation of that sequence. That is, no elements are added or deleted or replaced in the sequence, rather the order in which the elements appear in the sequence is changed.

Two methods for frustrating statistical cryptanalysis are:

Diffusion – Each plaintext digit affects many ciphertext digits, or each ciphertext digit is affected by many plaintext digits.

Confusion – Make the statistical relationship between a plaintext and the corresponding ciphertext as complex as possible in order to thread attempts to deduce the key.

### BLOCK CIPHER MODES OF OPERATION

MODE 1: Electronic Code Book

MODE 2: Cipher Block Chaining Mode

MODE 3: Cipher Feedback Mode:

### RC4 ALGORITHM

RC4 is an encryption algorithm created in 1987 by Ronald Rivest of RSA Security. It is a stream cipher (figure 2.31), which means that each digit or character is encrypted one at a time.

A key input is pseudorandom bit generator that produces a stream 8-bit number that is unpredictable without knowledge of input key.
The output of the generator is called key-stream, is combined one byte at a time with the plaintext stream cipher using X-OR operation.

**Symmetric Key Distribution**

1. A can select a key and physically deliver it to B.
2. A third party can select the key and physically deliver it to A and B.
3. If A and B have previously and recently used a key, one party can transmit the new key to the other, encrypted using the old key.
4. If A and B each has an encrypted connection to a third-party C, C can deliver a key on the encrypted links to A and B.

[Google Colaboratory](https://colab.research.google.com/drive/1bS1GHX7Vp8IeV-xpJ6YkfoSPuJgGzVVC?authuser=6)