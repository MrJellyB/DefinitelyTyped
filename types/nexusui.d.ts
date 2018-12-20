declare module "nexusui" {
    export class Interval { }
    export class Matrix { }
    export class counter { }

    export class Sequencer {
        columns: number;
        inerval: Interval;
        matrix: Matrix;
        rows: number;
        stepper: counter;

        destroy(): void;
        next(): void;
        resize(width: number, height: number): void;
        start(ms: number): void;
        stop(): void;
    }
}