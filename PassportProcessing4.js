function validatePassports(passports) {
    const validFields = [
        {
            field: 'byr',
            validate: (val) => {
                const regex = RegExp('^(19[2-9][0-9]|200[0-2])$');
                return regex.test(val)
            }
        },
        {
            field: 'iyr',
            validate: (val) => {
                const regex = RegExp('^20(1[0-9]|20)$');
                return regex.test(val)
            }
        },
        {
            field: 'eyr',
            validate: (val) => {
                const regex = RegExp('^20(2[0-9]|30)$');
                return regex.test(val)
            }
        }, {
            field: 'hgt',
            validate: (val) => {
                const regex = RegExp('^(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)$');
                return regex.test(val)
            }
        }, {
            field: 'ecl',
            validate: (val) => {
                const regex = RegExp('^(amb|blu|brn|gry|grn|hzl|oth)$');
                return regex.test(val)
            }
        }, {
            field: 'hcl',
            validate: (val) => {
                const regex = RegExp('^#([0-9a-f]{6})');
                return regex.test(val)
            }
        }, {
            field: 'pid',
            validate: (val) => {
                const regex = RegExp('^([0-9]{9})$');
                return regex.test(val)
            }
        }]

    let validPassportCount = 0;
    for (let passport of passports) {
        passport = passport.replace(/\n/g, ' ');
        const serlizedPassport = serializePassport(passport);
        let pass = true;
        for (let field of validFields) {
            if (!pass) break;
            pass = field.validate(serlizedPassport[field.field]);
        }
        if (pass) validPassportCount++
        pass = true;
    }
    return validPassportCount;
}

function serializePassport(passport) {
    const passportHashTable = {};
    const passportArr = passport.split(' ');
    for (let prop of passportArr) {
        const [key, value] = prop.split(':');
        passportHashTable[key] = value
    }
    return passportHashTable;
}