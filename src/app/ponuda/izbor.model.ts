export class Izbor {
    id: number;
    naziv: string;
    cena: number;
    cek: boolean;

    constructor(id: number, naziv: string, cena: number, cek: boolean) {
        this.id = id;
        this.naziv = naziv;
        this.cena = cena;
        this.cek = cek;
    }
}