# Elm in Node example

```txt
ℹ️ Elm 0.19
```

Example to show how to run
[Elm](https://elm-lang.org/)
code in a
[Node](https://nodejs.org/en/)
application.

It uses
[Elm ports](https://guide.elm-lang.org/interop/ports.html)
to communicate between Elm and Javascript.

## Before you begin

### Installing Elm

[Elm](https://elm-lang.org/)
is usually for front-end development,
but since it compiles to Javascript,
we want to run it in Node as a backend application.

Follow the official guide to
[install Elm](https://guide.elm-lang.org/install/elm.html).
It's very easy, there are installers/instructions for Mac, Linux and Windows.

Then, check your Elm installation.

```sh
elm --version
```

### Installing Node

We only need
[Node](https://nodejs.org/en/)
to run the Javascript app as a server.

Follow the instructions to
[install nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
# Verify you have nvm.
nvm --version

# Install the latest version of node.
nvm install node

# Make sure you are pointed to nvm's node version.
which node
# This could look something like:
#   /Users/<USER>/.nvm/versions/node/v14.4.0/bin/node
```

## Running an example server

To run a server, we need to compile it with Elm and run it with node.
Don't worry, Elm is very fast at compiling so it should compile and run almost instantly.

```sh
elm make src/Main.elm --output example/main.js && node example/run.js
```

Here's a small summary of what's happening:

1. Elm compiles into Javascript to the file [`example/main.js`](example/main.js).
1. We created the file [`example/run.js`](example/run.js), and we run it with node.
1. Node imports and loads the compiled Elm application.
1. First, we print how Elm's ports look like.
1. Then, we subscribe to an Elm port, and send a message to another port.

> ℹ️ To learn more about Elm/Javascript interoperability, see:
>
> https://elm-lang.org/docs/syntax#javascript-interop

---

> <details>
> <summary>Click here to show how the output should look like.</summary>
> 
> ```txt
> >> elm make src/Main.elm --output example/main.js && node example/run.js
>
> Success!
>
>     Main ───> example/main.js
>
> Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.
> {
>   fromJavascript: { send: [Function: send] },
>   toJavascript: {
>     subscribe: [Function: subscribe],
>     unsubscribe: [Function: unsubscribe]
>   }
> }
> App started
> From Elm: Tick 1591817413060; Model init
> From Elm: Tick 1591817414065; Model init
> From Elm: I received a message, changing the model to: Hello from Node!
> From Elm: Tick 1591817415068; Model Hello from Node!
> From Elm: Tick 1591817416069; Model Hello from Node!
> Done
> ```
>
> </details>
