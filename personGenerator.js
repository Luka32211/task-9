const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Елена",
            "id_4": "Анна",
            "id_5": "Любовь",
            "id_6": "Анастасия",
            "id_7": "Юлия",
            "id_8": "Наталия",
            "id_9": "Полина",
            "id_10": "Лидия"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемьевич",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михайлов",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемьевна",
            "id_5": "Дмитриевна",
            "id_6": "Никитовна",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "инженер",
            "id_2": "физик",
            "id_3": "философ",
            "id_4": "пожарный",
            "id_5": "полицейский",
            "id_6": "плотник",
            "id_7": "боцман",
            "id_8": "лоцман",
            "id_9": "прораб",
            "id_10": "обвальщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "кружевница",
            "id_2": "вышивальщица",
            "id_3": "цветочница",
            "id_4": "фасовщица",
            "id_5": "маникюрша",
            "id_6": "педикюрша",
            "id_7": "кастелянша",
            "id_8": "няня",
            "id_9": "горничная",
            "id_10": "сестра-хозяйка"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        const arr_gender = [this.GENDER_FEMALE, this.GENDER_MALE];
        return arr_gender[Math.floor(Math.random() * arr_gender.length)];;
    },

    randomFirstName: function () {
        if (this.person.gender === this.GENDER_MALE)
            return this.randomValue(this.firstNameMaleJson);
        else
            return this.randomValue(this.firstNameFemaleJson);
    },


    randomSurname: function () {
        if (this.person.gender === this.GENDER_MALE)
            return this.randomValue(this.surnameJson);
        else
            return this.randomValue(this.surnameJson) + 'а';
    },

    randomPatronymic: function () {
        if (this.person.gender === this.GENDER_MALE)
            return this.randomValue(this.patronymicMaleJson);
        else
            return this.randomValue(this.patronymicFemaleJson);
    },

    randomProfession: function () {
        if (this.person.gender === this.GENDER_MALE)
            return this.randomValue(this.professionMaleJson);
        else
            return this.randomValue(this.professionFemaleJson);
    },

    randombirthYear: function (start = new Date(1960, 0, 1), end = new Date()) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randombirthYear();
        return this.person;
    }
};
