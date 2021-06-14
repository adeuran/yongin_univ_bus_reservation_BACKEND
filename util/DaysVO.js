class DaysVO {
    #binaryDays;

    constructor(binaryDays=0) {
        this.#binaryDays = binaryDays;
    }
    checker() {
        return {
            0: this.isSunday,
            1: this.isMonday,
            2: this.isTuesday,
            3: this.isWednesday,
            4: this.isThursday,
            5: this.isFriday,
            6: this.isSaturday,
        };
    }
    isSunday() {
        if (this.binaryDays & 128 == 128) return true;
        else return false;
    }
    isMonday() {
        if (this.binaryDays & 64 == 64) return true;
        else return false;
    }
    isTuesday() {
        if (this.binaryDays & 32 == 32) return true;
        else return false;
    }
    isWednesday() {
        if (this.binaryDays & 16 == 16) return true;
        else return false;
    }
    isThursday() {
        if (this.binaryDays & 8 == 8) return true;
        else return false;
    }
    isFriday() {
        if (this.binaryDays & 4 == 4) return true;
        else return false;
    }
    isSaturday() {
        if (this.binaryDays & 2 == 2) return true;
        else return false;
    }
    isOption() {
        if (this.binaryDays & 1 == 1) return true;
        else return false;
    }
    setSunday() {
        return this.binaryDays | 128;
    }
    setMonday() {
        return this.binaryDays | 64;
    }
    setTuesday() {
        return this.binaryDays | 32;
    }
    setWednesday() {
        return this.binaryDays | 16;
    }
    setThursday() {
        return this.binaryDays | 8;
    }
    setFriday() {
        return this.binaryDays | 4;
    }
    setSaturday() {
        return this.binaryDays | 2;
    }
    setOption() {
        return this.binaryDay | 1;
    }
    unsetSunday() {
        return this.binaryDay | 127;
    }
    unsetMonday() {
        return this.binaryDay | 191;
    }
    unsetTuesDay() {
        return this.binaryDay | 223;
    }
    unsetWednesday() {
        return this.binaryDay | 239;
    }
    unsetThursday() {
        return this.binaryDay | 247;
    }
    unsetFriday() {
        return this.binaryDay | 251;
    }
    unsetSaturday() {
        return this.binaryDay | 253;
    }
    unsetOption() {
        return this.binaryDay | 254;
    }
    get binaryDays() {
        return this.#binaryDays;
    }
}