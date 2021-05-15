---
title: "Probability and Random Processes Cheat Sheet"
date: 2021-05-11T10:30:30-07:00
slug: "eecs126"
description: "For the curious."
keywords: ["berkeley", "eecs126", "notes", "random processes", "probability"]
location: "Berkeley, USA"
draft: false
tags: ["eecs126", "classes"]
stylesheet: "post.css"
math: true
---
This page is a collection of all theorems taught in EECS126: Probability and Random Processes, Spring 2021. A good reference! 

Link to PDF version [here](/pdf/eecs126.pdf).

## Probability Basics

1.  Conditional Probability
$$P(A | B) = \frac{P(A \cap B)}{P(B)}, P(B) > 0$$

1.  Total Probability Theorem
$$P(B) = \sum_{i=1}^{n} P(A_i)P(B | A_i)$$

1.  Bayes Rules
$$P(A_i | B) = \frac{P(A_i)P(B|A_i)}{P(B)}$$

1.  Union Bound
$$P(\bigcup_{i=1}^{\infty} A_i) \leq \sum_{i=1}^{\infty}P(A_i)$$

1.  Independence
$$P(A | B)  = P(A) \iff \text{A and B are independent} $$

1.  Conditional Independence
$$P(A \cap B | C)  = P(A | C) P(B | C) \implies \text{A and B conditionally independent}$$

1.  Independence of Several Events
$$P(\cap_{i \in S} A_i) = \prod_{i \in S} P(A_i)$$

1.  Counting Permutations of Size $k$ in $n$ Objects
$$^nP_k = \frac{n!}{(n-k)!}$$

1.  Counting Ways to Choose $k$ Objects in $n$ Objects
$${n\choose k} = \frac{n!}{k!(n-k)!}$$

1.  Counting Ways To Partition $n$ Objects into $n^i$ Groups
$${n\choose n_1, n_2... n_k} = \frac{n!}{n_1! n_2!...n_k!}$$


## Discrete Random variables

1.  Bernoulli Random Variable
$$
\begin{aligned}
P(X = k) = \begin{cases}
1  & \text{ with probability } p \newline 
0  & \text{ with probability } 1-p
\end{cases}
\end{aligned}
$$

$$\mathbb{E}(X) = p$$
$$var(X) = p(1-p)$$

1.  Binomial Random Variable
$$P(X = k) = {n\choose k} p^k (1-p)^{n-k}$$
$$\mathbb{E}(X) = np$$
$$var(X) = np(1-p)$$

1.  Geometric Random Variable
$$P(X = k) = (1-p)^{k-1} p$$
$$\mathbb{E}(X) = \frac{1}{p}$$
$$var(X) = \frac{1-p}{p^2}$$

1.  Poisson Random Variable
$$P(X_\lambda = k) = \frac{e^{-\lambda}\lambda^k}{k!}$$
$$\mathbb{E}(X) = \lambda $$
$$var(X) = \lambda$$

1.  Linearity of a Poisson RV
$$Poisson(\lambda) + Poisson(\mu) \sim Poisson(\lambda + \mu)$$

1.  Uniform Random Variable
\begin{equation*}
P(X = k) = \begin{cases}
\frac{1}{b-a+1} & \  k \in [a,b] \\
0 & \text{ otherwise}
\end{cases}
\end{equation*}

1.  Joint PMFs
$$P_{X, Y} (x, y) = \Pr(X = x, Y = y)$$
$$P_X(x) = \sum_{y} P_{X, Y}(x, y) \text{ and vice versa}$$

1.  Conditional PMFs
$$P_{X|A}(X = x|A) = \frac{P(\{X = x\} \cap A)}{P(A)}$$
$$P_{X_Y}(x|y) = \frac{P_{X,Y}(x,y)}{P_Y(y)}$$


## Expectation, Variance and Covariance

1.  Expectation
$$\mathbb{E}(X) = \sum_{x} xP(X = x)$$

1.  Law of The Unconscious Statistician
$$\mathbb{E}(g(X)] = \sum_{x} g(x)P(X = x)$$

1.  Variance
$$var(X) = \mathbb{E}[(X - \mathbb{E}(X))^2] \geq 0$$

1.  Standard Deviation
$$\sigma = \sqrt{var}$$

1.  Linearity of Expectation
$$\mathbb{E}(aX + bY) = a\mathbb{E}(X) + b\mathbb{E}(Y)$$

1.  Expectation of Joint Distribution
$$\mathbb{E}(g(X, Y)) = \sum_{x}\sum_{y} g(x, y)P_{X, Y}(x, y)$$

1.  Variance of a Sum of Random Variables
$$var(X+Y) = var(X) + var(Y) + 2cov(X, Y)$$

1.  Conditional Expectation
$$\mathbb{E}(X | Y = y) = \sum_{x} x\ P_{X|Y}(x|y)$$

1.  Total Expectation Theorem
$$\mathbb{E}(X) = \sum_{y} P_Y(y)\mathbb{E}(X|Y=y)$$

1.  Iterated Expectation
$$\mathbb{E}(X) = \mathbb{E}(\mathbb{E}(X|Y))$$

1.  Tower Property
$$\mathbb{E}[\mathbb{E}[X|Y]g(Y)] = \mathbb{E}[Xg(Y)]$$

1.  Expectation of Independent Variables
$$\mathbb{E}(XY) = \mathbb{E}(X)\mathbb{E}(Y) \text{ if X, Y independent}$$

1.  Covariance
$$cov(X,Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y)$$

1.  Correlation Coefficient
$$\rho(X, Y) = \frac{cov(X,Y)}{\sqrt{Var(X)Var(Y)}}$$
$$|\rho| \leq 1$$

1.  Variance of Two Independent Variables
   
$$Var[XY] = \mathbb{E}[X^2]\mathbb{E}[Y^2] - \mathbb{E}[X]^2\mathbb{E}[Y]^2$$

1.  Law of Total Variance
$$var(X) = Var(\mathbb{E}(X|Y)) + \mathbb{E}(var(X|Y))$$


## Continuous Random Variables

1.  Probability Density Functions
$$P(X \in [a, b]) = \int_{a}^{b} f_X(x)dx$$

1.  Cumulative Ditribution Function
$$F_X(x) = \int_{-\infty}^{x} f(t)dt$$

1.  Uniform Distribution
$$
\begin{aligned}
f_X(x) &= \frac{1}{b-a},\ a<x<b \newline
\mathbb{E}(X) &= \frac{a+b}{2} \newline
var(X) &= \frac{(b-a)^2}{12}
\end{aligned}
$$

1.  Exponential Distribution
$$
\begin{aligned}
f_X(x) &= \lambda e^{-\lambda x},\ x>0 \newline
F_X(x) &= 1 - e^{-\lambda x} \newline
\mathbb{E}(X) &= \frac{1}{\lambda} \newline
var(X) &= \frac{1}{\lambda^2}
\end{aligned}
$$

1.  Gaussian Distribution
$$f_X(X) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-\mu)^2/2\sigma^2}$$

1.  Sum of Two Gaussian Variables
$$aN(\mu_1, \sigma^2_1) + bN(\mu_2, \sigma^2_2) \sim N(a\mu_1 + b\mu_2, a^2\sigma^2_1 + b^2\sigma_2^2)$$

1.  Joint PDFs
$$f_{X|Y}(x|y) = \frac{f_{X, y}(x, y)}{f_Y(y)}$$

1.  Independence of Continuous Variables
$$f_{X, Y}(x, y) = f_x(x)f_Y(y)$$


## Order Statistics

1.  Smallest RV in a set of RVs
$$\text{Let } Y = \min_{1 \leq k \leq n} X_k \text{ , iid with CDF $F_X$}$$
$$F_Y(y) = 1 - (1 - F_X(y))^n$$

1.  Largest RV in a set of RVs
 $$\text{Let } Y = \max_{1 \leq k \leq n} X_k \text{ , iid with CDF $F_X$}$$
 $$F_Y(y) = (F_X(y))^n$$


## Convolution

1.  Discrete Convolution
$$
\begin{aligned}
p_Z(z) &= P(X+Y=z) = \sum_{x}P(X=x, Y=z-x) \newline
&= \sum_{x}P_x(x)P_Y(z-x) \text{ if X, Y independent}
\end{aligned}
$$

1.  Continuous Convolution
$$
f_Z(z) = \int_{-\infty}^{\infty} f_X(x)f_Y(z-x)dx
$$


## Moment Generating Function

1.  MGF for a RV
$$
\begin{aligned}
M_x(s) &= \mathbb{E}[e^{sx}] \newline
&=\int_{-\infty}^{\infty} e^{sx} f_X(x)dx
\end{aligned}
$$

1.  Derivative of an MGF
$$
\frac{d^nM(s)}{ds^n} |_{s=0} = \int x^nf(x)dx = \mathbb{E}[X^n]
$$

1.  MGF of a Poisson RV
$$M(s) = e^{\lambda (e^s-1)}$$

1.  MGF of a Exponential RV
$$M(s) = \frac{\lambda}{\lambda - s}\text{ , $s < \lambda$}$$

1.  MGF of the Standard Normal Gaussian RV
$$M(s) = e^{s^2/2}$$

1.  Moments of Standard Normal RV
$$
\mathbb{E}(X^m) = \begin{cases}
0 & \text{ , m odd} \newline
2^{-m/2}\frac{m!}{(m/2)!} & \text{ , m even}
\end{cases}
$$

1.  MGF of a Geometric RV
$$M(s) = \frac{pe^s}{1- (1-p)e^s}$$

1.  MGF of a Bernoulli RV
$$M(s) = 1 - p + pe^s$$

1.  MGF of a Binomial RV
$$M(s) = (1 - p + pe^s)^n$$

1.  MGF of a Uniform RV
$$
\begin{equation*}
M(s) = \begin{cases}
\frac{e^{bs} - e^{as}}{s(b-a)} &\ s \neq 0 \newline
1 &\ s = 0
\end{cases}
\end{equation*}
$$

1.  MGF of a Sum of RVs
$$
\begin{aligned}
\text{Let } Z &= \sum X_i \newline
M_Z(s) &= \prod M_{X_i}(s)
\end{aligned}
$$

1.  MGF of a $Y = a^TX$, X is Gaussian Vector
$$M_Y(s) = M_X(sa) = \exp{(s(a^T\mu_x) +\frac{1}{2}s^2a^T\Sigma a)}$$


## Bounds

1.  Markov Inequality
  
$$P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}$$

1.  Chebyshev's Inequality
$$P(|X - \mu| \geq c) \leq \frac{\sigma^2}{c^2}$$

1.  Chernoff Bound
$$P(X \geq a) \leq \frac{\mathbb{E}[e^{sx}]}{e^{sa}} \text{ , $s > 0$}$$
$$P(X \leq a) \leq \frac{M(s)}{e^{sa}} \text{ , $s \leq 0$}$$

1.  Jensen Inequality
$$f(\mathbb{E}(x)) \leq \mathbb{E}[f(x)] \text{ , f is convex, $f''(x) > 0$}$$

1.  Weak Law of Large Numbers
  
$$\lim_{n \xrightarrow{} \infty} P(|\frac{1}{n}\sum_{i=1}^{n}X_i - \mathbb{E}[X]| \geq \epsilon) = 0$$

1.  Strong Law of Large Numbers
$$P(\lim_{n\xrightarrow{} \infty} M_n = \mu) = 1$$

1.  Central Limit Theorem
$$
\begin{aligned}
\text{Define } Z &= \frac{S_n - n\mu}{\sqrt{n}\sigma} \newline
F_Z(z) &\xrightarrow{} \phi(z)
\end{aligned}
$$


## Convergences

1.  Almost Sure Convergence
$$P(\lim_{n \xrightarrow{} \infty} X_n = X) = 1$$

1.  Convergence in Probability
$$\lim_{n \xrightarrow{} \infty} P(|X_n - X| \geq \epsilon) = 0$$

1.  Convergence in Distribution
$$\lim_{n \xrightarrow{} \infty} F_{X_n}(x) = F_X(x)\ \  \forall x$$


## Entropy

1.  Entropy
$$H(X) = - \sum_{i=1}^{n} p_i \ln(p_i)$$

1.  Chain Rule of Entropy
$$H(X, Y) = H(Y) + H(X|Y) = H(X) + H(Y|X)$$

1.  Convergence of Joint Entropy
$$-\frac{1}{n} \log p(x_1, x_2... x_n) \xrightarrow{p} H(X)$$


## Information Theory

1.  Source Coding Theorem \
As $n \xrightarrow{} \infty$, consider N iid RVs with entropy $H(X)$. You can compress this into no more and no less than $NH(X)$ bits without sending over extra bits or losing information. 

1.  Channel Coding Theorem \
Define channel capacity as the $\frac{ \text{# of message input bits}}{\text{# of bits transmitted}}$. Any sequence of codes with error probability $p \xrightarrow{} 0$ has a rate R $<$ capacity.

1.  Capacity of a BEC
$$C = 1 - p$$

1.  Capacity of a BSC
$$C = 1 - H(p)$$

1.  Asymptotic Equipartition (AEP) Theorem
$$
\begin{array}[1]
  A_\epsilon^{(n)} = \{(x_1, x_2... x_n): p(x_1, x_2... x_n) \geq 2^{-n(H(X) + \epsilon)}\} \newline
p((x_1, x_2... x_n) \in A_\epsilon^{(n)}) \xrightarrow{n \xrightarrow{} \infty} 1 \newline
|A_\epsilon^{(n)}| \leq 2^{n(H(X) + \epsilon)}
\end{array}
$$

1.  Average Number of Bits Transmitted
$$\mathbb{E}[number\ bits] \leq n(H(X) + \epsilon)$$

1.  Mutual Information
$$I(X;Y) = \sum p_{XY}(x, y)\log\frac{P_{XY}(x, y)}{P_X(x)P_y(Y)}$$

1.  Mutual Information and Entropy
$$I(X;Y) = H(X) + H(Y) - H(X, Y)$$

1.  Capacity of A Channel
$$C = \max_{p_x} I(X;Y)$$

1.  Upper Bound on Probability of Error in BEC
$$P(\text{error}) = 2^{-n(1-p) + L(n)}$$ $$\text{ where n = \# bits of bits sent and L = \# of bits in message}$$


## Discrete Time Markov Chains

1.  Markov Property
$$P(X_{n+1} | X_n...X_1) = P(X_{n+1} | X_n)$$

1.  Chapman Komogorov Equations
$$P_{ij}^n = [P^n]_{ij}$$

1.  Periodicity
$$d(i) = gcd\ {n \geq 1: P_{ii}^n > 0\}$$

1.  Stationary Distribution
$$\pi P = \pi$$

1.  Hitting Time
\begin{equation*}
\beta(i) = \begin{cases}
1 + \sum_j p_{ij}\beta_j & i \notin A \\
0 & i \in A
\end{cases}
\end{equation*}

1.  Detailed Balance Equations
$$\pi_i P_{ji} = \pi_i P_{ij},\ \ i, j \in S$$

1.  Stationary Distribution of an Undirected Graph
$$\pi(i) = \frac{d(i)}{\sum_{j}d(j)} = \frac{degree(i)}{2E}$$



## Poisson Processes

1.  Number of arrivals within $t$
$$P(N_t = n)\sim Poisson(\lambda t) = \frac{e^{-\lambda t}(\lambda t)^n}{n!}$$

1.  Inter-arrival Time
$$S_i \sim Exp(\lambda)$$

1.  Sum of Inter-arrival Times: Erlang Distribution
$$f_{T_n}(s) = \frac{\lambda e^{-\lambda s}(\lambda s)^{n-1}}{(n-1)!}$$

1.  Memoryless Property
$$N_{T_i} - N_{T_{i-1}} \sim Poisson(\lambda (t_i - t_{i-1}))$$

1.  Poisson Merging
$$PP(\lambda_1) + PP(\lambda_2) \sim PP(\lambda_1 + 
\lambda_2)$$

1.  Poisson Splitting
$$P(\min\{T_a, T_b\} = T_a) = \frac{\lambda_a}{\lambda_a + \lambda_b}$$

1.  Random Incidence Paradox
$$L \sim Erlang(2, k)$$


## Continuous Time Markov Chains

1.  Temporal Homogeneity
$$P(X_{t+\tau}\ |\ X_t = i, X_s = i_s \forall\ 0 \leq s < t) = P(X_\tau = j | X_0 = i)$$

1.  Rate of Self-Transition
$$Q(i, i) = -\sum_{j\neq i} Q(i, j)$$

1.  Balance Equations
$$\sum_{i\neq j} \pi_i Q(i, j) = \pi_j \sum_{k \neq j} Q(j, k)$$

1.  Uniformization (Simulated DTMC)
$$
\begin{aligned}
\text{Let } q &= \text{sup}\ q(i) \text{ , strongest self-loop} \newline
R &= I + \frac{1}{q}Q
\end{aligned}
$$

1.  Hitting Time
$$
\begin{equation*}
\beta(i) = \begin{cases}
\frac{1}{q(i)} + \sum_{j \neq i} \frac{Q(i, j)}{q(i)} \beta(j) & i \notin A \newline
0 & i \in A
\end{cases}
\end{equation*}
$$


## Random Graph

1.  Probability of a Random Graph Being Given Graph
$$P(G = G_0) \sim Binomial({n\choose 2}, p)$$

1.  Distribution of Degree of Vertex in Random Graph
$$P(D = d) \sim Binomial(n-1, p) \xrightarrow{n \xrightarrow{} \infty} Poisson((n-1)p)$$


1.  Erdos Renyi Theorem
$$
\begin{aligned}
Let\ p(n) = \lambda\frac{\ln(n)}{n} \newline
P(G \text{ is connected}) \xrightarrow{n \xrightarrow{} \infty} 0 &\ ,\ \lambda < 1 \newline
P(G \text{ is connected})\xrightarrow{n \xrightarrow{} \infty} 1 &\ ,\ \lambda > 1
\end{aligned}
$$

1.  Combining Graphs
$$P(e \in G = G_1 \cup G_2 | e \in G_1 \cup e \in G2) = p_1 + p_2 - p_1p_2$$


## Statistical Inference

1.  Bayes Rule Redux
$$P(X = x | Y = y) = \frac{P_{Y|X}(y|x) \pi(x)}{\sum_{i} P_{Y|X}(y|i) \pi(i)}$$

1.  Maximum A-Posteriori Estimation (MAP)
$$\text{MAP}(X|Y=y) = \max_{x} P_{X|Y}(x|y) =  \max_{x} P_{Y|X}(y|x)\pi(x)$$

1.  Maximum Likelihood Estimation (MLE)

$$MLE(X|Y=y) = \max_x P_{Y|X}(y|x)$$
<!-- $$MLE(X|Y=y) = \text{argmax}_x P_{Y|X}(y|x)$$ -->

1.  Likelihood Ratio
$$L(y) = \frac{P_{Y|X}(y|1)}{P_{Y|X}(y|0)}$$

1.  MLE of a BSC
$$
\begin{equation*}
MLE(X|Y=y) = \begin{cases}
y & \text{if }p \leq 1/2 \newline
1-y & \text{if }p > 1/2
\end{cases}
\end{equation*}
$$
$$
\begin{equation*}
 MLE(X|Y=y) = \begin{cases}
1 & \text{if } L(y) \geq 1 \newline
0 & \text{if } L(y) < 1
\end{cases}
\end{equation*}
$$

1.  MAP of a BSC
$$
\begin{equation*}
\text{MAP}(X | Y = y) = 
\begin{cases}
0 &\ \text{if } L(y) < \frac{\pi_0}{\pi_1} \newline
1 &\ \text{if } L(y) \geq \frac{\pi_0}{\pi_1}
\end{cases}
\end{equation*}
$$

1.  Likelihood Ratio for $X\in \{0, 1\}$ with Gaussian Noise
$$L(y) = \exp{[\frac{y}{\sigma^2} - \frac{1}{2\sigma^2}]}$$

1.  MAP for $X\in \{0, 1\}$ with Gaussian Noise
$$
\text{MAP}(X | Y = y) = 
\begin{cases}
0 &\ \text{if } L(y) < \frac{\pi_0}{\pi_1} = y \geq \frac{1}{2} + \sigma^2 log(\frac{\pi_0}{\pi_1}) \newline
1 &\ \text{if } L(y) \geq \frac{\pi_0}{\pi_1}
\end{cases}
$$

1.  MLE for $X\in \{0, 1\}$ with Gaussian Noise
$$
\begin{equation*}
 MLE(X|Y=y) = \begin{cases}
1 & \text{if } L(y) \geq 1 = y \geq \frac{1}{2} \newline
0 & \text{if } L(y) < 1 \newline
\end{cases}
\end{equation*}
$$



## Binary Error Testing

1.  Neyman-Pearson Lemma
$$
\begin{aligned}
  &\text{Minimizes P(false negatives) with P(false positive) $\leq \beta$} \newline
  &\hat{X} = \begin{cases}
      1\ &  L(y) > \lambda \newline
      0\ & L(y) < \lambda \newline
      Bern(\gamma)\ & L(y) = \lambda 
    \end{cases} \newline
  &\text{Setting } P(\hat{X} = 1 | X = 0) = \beta
\end{aligned}  
$$

## Estimations

1.  Mean Square Error (MSE)
$$\mathbb{E}[(X - \hat{X}(Y))^2]$$

1.  Minimum Mean-Squared Estimation (MMSE)
$$\text{MMSE}(X|Y) = \text{argmin}_{\hat{X}}\mathbb{E}[(X - \hat{X}(Y))^2] = \mathbb{E}(X|Y)$$

1.  MMSE Theorem 
$$E[(X-g(Y))f(Y)] = 0 \ \forall f \implies g(Y) = \text{ MMSE}$$

1.  Linear Least Squares Estimation
$$
\begin{aligned}
&\mathbb{L}[X|Y] = \min_{\text{linear} \hat{X}} \mathbb{E}[|X - \hat{X}(Y)|^2] = \min_{a, b_1...b_n} \mathbb{E}[|X - (a+\sum b_iY_i)|^2] \newline
&\text{Let Y be a vector of all observations $Y_i$} \newline
&\text{Define }  \Sigma_{XY} = \mathbb{E}[(X-\mu_x)(Y-\mu_y)^T] \newline
&\Sigma_{Y} = \mathbb{E}[(Y-\mu_y)(Y-\mu_y)^T] \newline
&\mathbb{L}[X|Y] = \mu_x + \Sigma_{XY} \Sigma_{Y}\ ^{-1} (Y - \mu_y) \newline
&\mathbb{L}[X|Y] = \mu_x + \frac{cov(X, Y)}{var(Y)} (Y - \mu_y)
\end{aligned}
$$

1.  Linear Least Squared Error
$$LLSE = var(X) - \Sigma_{XY}\Sigma_{Y}\ ^{-1}\Sigma_{YX}$$


## Hilbert Spaces

1.  Hilbert Projection Theorem
$$
\forall v \in H, U \subseteq H,\ \exists\ \text{$\min_{u \in U}$} ||u-v||:\text{ u is unique} \\
<u-v, u'> = 0 \ \forall\ u' \in U
$$

1.  Hilbert Random Variable Theorem
$$<X, Y> = \mathbb{E}[XY]$$

1.  LLSE in Hilbert Spaces
$$
<\mathbb{L}[X|Y] - X, u> = \mathbb{E}[(\mathbb{L}[X|Y] - X)u] = 0\ \forall\ u
$$

1.  Orthogonality Principle
   
$$
\begin{aligned}
  &\mathbb{E}(\mathbb{L}[X|Y]) = \mathbb{E}[X] \newline
  &\mathbb{E}[(\mathbb{L}[X|Y] - X)Y_i] = 0 \newline
  &\mathbb{E}[(\mathbb{L}[X|Y] \cdot Y^T] = \mathbb{E}[XY^T]
\end{aligned}
$$

1.  Magnitude
$$||X|| = \sqrt{<X, X>} = \sqrt{\mathbb{E}(|X|^2)}$$

1.  Zero-Mean Multiple RVs
$$
\begin{aligned}
  &\text{Let X, Y, Z zero-mean} \newline
  &L[X|Y, Z] = L[X|Y] - L[X|Z - L[Z|Y]] \newline
  &L[X|Y, Z] = L[X|Y] - L[X|Z] \text { if Y, Z uncorrelated}
\end{aligned}  
$$

