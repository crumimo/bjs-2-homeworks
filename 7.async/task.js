class AlarmClock {
    //constructor - выделяет память для объекта.
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    //addClock - добавляет новый звонок в коллекцию существующих.
    addClock(time, callback, id) {
        if (id === undefined) throw new Error('error text');
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Будильник с таким id уже существует.');
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    //removeClock - удаляет определённый звонок.
    removeClock(id) {
        let alarmLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id != id);
        return !(alarmLength === this.alarmCollection.length);
    }

    //getCurrentFormattedTime - возвращает текущее время в строковом формате HH:MM.
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().substring(0, 5);
    }

    //start - запускает все звонки
    start() {
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        let checkClockBinded = checkClock.bind(this);

        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClockBinded(item)), 1000);
        }
    }

    //stop - останавливает выполнение всех звонков
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    //printAlarms - печатает все звонки
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
    }

    //clearAlarms - удаляет все звонки
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// функция для теста будильника
function testCase() {
    let clock = new AlarmClock;

    // функция для теста позволяет задавать дату от текущей с прибавлением заданных минут
    function dateAlarm(minute = 0) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes() + minute;

        if (minutes > 59) {
          hours = hours + Math.floor(minutes / 60);
          minutes = minutes % 60;
        }
        if (hours < 10) {hours = "0" + hours};
        if (minutes < 10) {minutes = "0" + minutes};
        return (hours + ':' + minutes);
    }

    // новый звонок с текущим временем и колбеком вывода текста на консоль
    clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 1);

    // звонок со временем +1 минуты от текущего времени и колбеком: вывода текста на консоль, 
    //а так же удалением этого звонка.
    clock.addClock(dateAlarm(1), () => {console.log('Давай, вставай уже!'), clock.removeClock(2)}, 2);

    //звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, 
    //а так же остановки всех звонков, очистки всех звонков и выводом всех звонков. 
    clock.addClock(dateAlarm(2), () => {
        console.log('Вставай, а то проспишь!'),
        clock.stop(), 
        clock.clearAlarms(),
        clock.printAlarms()
    }, 3);

    // печать звонков (должно вывестись 3 звонка)
    clock.printAlarms();

    // запуск выполнения наших звонков
    clock.start();
  }

  // запуск теста
  testCase(); 

  