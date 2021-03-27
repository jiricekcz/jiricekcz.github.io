class LanguageManager extends Array<Language> {
    constructor() {
        super();
    }
    main(): Array<Language> {
        return this.filter(language => language.main);
    }
    mainString(): string {
        const m = this.main();
        let rv = m[0].toString();
        for (let i = 1; i < m.length - 1; i++) {
            rv += ", " + m[i];
        }
        rv += ", and " + m[m.length - 1]; 
        return rv;
    }
    timeSorted(): Array<Language> {
        return this.sort((a, b) => a.order - b.order);
    }
    usageSorted(): Array<Language> {
        return this.sort((a, b) => a.usage - b.usage);
    }
    mostUsed(index = 0): Language {
        return this.usageSorted()[index];
    }
}
class Language {
    readonly name: string;
    readonly main: boolean;
    readonly order: number;
    readonly usage: number;
    constructor(name: string, stat: {
        main: boolean,
        order: number,
        usage: number
    }) {
        this.name = name;
        this.main = stat.main;
        this.order = stat.order;
        this.usage = stat.usage;
    } 
    toString(): string {
        return this.name;
    }
}
export const langs = new LanguageManager();
langs.push(new Language("JavaScript", {
    main: true,
    order: 1,
    usage: 1

}));
langs.push(new Language("TypeScript", {
    main: true,
    order: 5,
    usage: 0
}));
langs.push(new Language("C++", {
    main: true,
    order: 4,
    usage: 2
}));
langs.push(new Language("C#", {
    main: false,
    order: 2,
    usage: 4
}));
langs.push(new Language("C", {
    main: false,
    order: 3,
    usage: 5
}));
langs.push(new Language("Python", {
    main: false,
    order: 6,
    usage: 3
}));
langs.push(new Language("Java", {
    main: false,
    order: 0,
    usage: 6
}));
class TimeEvent extends Date { 
    static readonly dob = new TimeEvent(1099263600000);
    constructor(time: number){ 
        super(time);
    }
    get year(): string { 
        return this.getFullYear().toString();
    }
    get age(): number { 
        return Math.floor((this.getTime() - TimeEvent.dob.getTime()) / 3.154e+10);
    }
}
export const events = {
    startedProgramming: new TimeEvent(1449702000000)
}
export const name = "Jiří Cihelka"