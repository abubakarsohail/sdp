
// Interface that provides the basis of fly behavior
// all the child classes implement their own way of flying 
interface FlyBehavior
{
    fly(): void;
}

class FlyWithWings implements FlyBehavior
{
    fly(): void
    {
        console.log('I’m flying!!');
    }
}

class FlyNoWay implements FlyBehavior
{
    fly(): void
    {
        console.log('I can’t fly');
    }
}

class FlyRocketPowered implements FlyBehavior
{
    fly(): void
    {
        console.log('I’m flying with a rocket!');
    }
}

// Interface that provides the basis of quack behavior
// all the child classes implement their own way of quacking

interface QuackBehavior
{
    quack(): void;
}

class Quack implements QuackBehavior
{
    quack(): void
    {
        console.log('Quack');
    }
}

class MuteQuack implements QuackBehavior
{
    quack(): void
    {
        console.log('<< Silence >>');
    }
}

class Squeak implements QuackBehavior
{
    quack(): void
    {
        console.log('Squeak');
    }
}

// Abstract duck class that has the common properties and methods
// for all the child classes. However, each child class should 
// know how to display itself
abstract class Duck
{
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    constructor()
    {
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }

    abstract display(): void;

    performFly(): void
    {
        this.flyBehavior.fly();
    }

    performQuack(): void
    {
        this.quackBehavior.quack();
    }

    swim(): void
    {
        console.log('All ducks float, even decoys!');
    }

    setFlyBehavior(fb: FlyBehavior): void
    {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior): void
    {
        this.quackBehavior = qb;
    }
}

class MallardDuck extends Duck
{
    constructor()
    {
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    display(): void
    {
        console.log('I’m a real Mallard duck');
    }
}

class ModelDuck extends Duck
{
    constructor()
    {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    display(): void
    {
        console.log('I’m a model duck');
    }
}

export {
    FlyWithWings,
    FlyNoWay,
    FlyRocketPowered,
    Quack,
    MuteQuack,
    Squeak,
    Duck,
    MallardDuck,
    ModelDuck
}

export type {
    FlyBehavior,
    QuackBehavior
}