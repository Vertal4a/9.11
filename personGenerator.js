
const personGenerator = {
    //Список фамилий
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
    //Список мужских имен
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
    // Список женских имен
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Светлана",
            "id_2" :"Снежанна", 
            "id_3": "Жанна",
            "id_4": "Розетта",
            "id_5": "Эльвира",
            "id_6": "Маргарита",
            "id_7": "Прима",
            "id_8": "Сабрина",
            "id_9": "Лолита",
            "id_10": "Изабелла"
           }
    }`,

    // Список отчеств
    MiddleNameJson: `{
        "count": 10,
        "list": {
            "id_1":"Никонорович",
            "id_2":"Панкратович",
            "id_3":"Пантелеймонович",
            "id_4":"Сулейманович",
            "id_5":"Карпович",
            "id_6":"Никифорович",
            "id_7":"Алибабаевич",
            "id_8":"Стопроцентович",
            "id_9":"Базарунетович",
            "id_10":"Дакактактович"
        }
    }`,

    //женские профессии 

    femaleProffesionJson: `{
        "count": 10,
        "list": {
            "id_1": "Парикмахер",
            "id_2": "Пекарь",
            "id_3": "Доярка",
            "id_4": "Педиатр",
            "id_5": "Дантист",
            "id_6": "Визажист",
            "id_7": "Овощевод",
            "id_8": "Продавец",
            "id_9": "Бухгалтер",
            "id_10": "Массажист"
        }
    }`,
    // мужские проффесии
    maleProffesionJson: `{
        "count": 10,
        "list": {
            "id_1": "Моторист",
            "id_2": "Тракторист",
            "id_3": "Слесарь",
            "id_4": "Столяр",
            "id_5": "Сталевар",
            "id_6": "Строитель",
            "id_7": "Инженер",
            "id_8": "Шахтер",
            "id_9": "Массажист",
            "id_10": "Комбайнёр"
        }
    }`,

    // месяц рождения
    monthOfBirthJson: `{
        "count" : 12,
        "list" : { 
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"

        }
    }`,
         

        
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
   
    //генератор случайных чисел, 
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
  
    // функция определения пола  
    randomGender: function () {
        let sex = this.randomIntNumber();
        console.log(sex);
        if (sex === 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },
        

     // Выбор имени соответственно полу
     randomFirstName: function () {
        var gender = this.person.gender;
       
         console.log (gender);
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson); 
             } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

      // возвращаемое значение из списка
    randomValue: function (json) {
        
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        
        return obj.list[prop];
    },

// выбор фамилии
     randomSurname: function() {
        var gender = this.person.gender;
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else { 
            return this.randomValue(this.surnameJson) + 'a';
        }
},

//  генерация отчества по полу
    randomMiddleName: function() {
        var gender = this.person.gender;
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.MiddleNameJson);
        } else {
            return this.randomValue(this.MiddleNameJson).replace('ич', "на");

        }
    },

    // генерация профессии по полу
     randomProffesion: function() {
        var gender = this.person.gender;
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.maleProffesionJson);
        } else {
            return this.randomValue(this.femaleProffesionJson);
        }
    },

    // год рождения
    randomYearOfBirth: function() {
        let year = this.randomIntNumber(2004, 1957);
        return year + " года";
    },

     
    randomMonthOfBirth: function() {
        var month = this.randomValue(this.monthOfBirthJson);
        console.log(month);
        return month;
     
    },

    randomDateOfBirth: function () {
    
        if (this.person.monthOfBirth === JSON.parse(this.monthOfBirthJson).list["id_4"]||
        this.person.monthOfBirth === JSON.parse(this.monthOfBirthJson).list["id_6"]||
        this.person.monthOfBirth === JSON.parse(this.monthOfBirthJson).list["id_9"]||
        this.person.monthOfBirth === JSON.parse(this.monthOfBirthJson).list["id_11"]) {
            
            return this.randomIntNumber (30, 1);
            
        } else if (this.person.monthOfBirth === JSON.parse(this.monthOfBirthJson).list["id_2"]) {
            
            return this.randomIntNumber (28, 1);
        } else { 
            return this.randomIntNumber (31, 1);
            
        }
},
    

// генерации персонажа
    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.proffesion = this.randomProffesion();
        this.person.yearOfBirth = this.randomYearOfBirth();
        this.person.monthOfBirth = this.randomMonthOfBirth();
        this.person.dateOfBirth = this.randomDateOfBirth();
        
        return this.person;
    }
}


    

