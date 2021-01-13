var app = new Vue({
    el: "#airlinebookings",
    data: {
        show: false,
        passengerInfos: [
            {
                flight_no: "JA922",
                passenger_name: "Jed Gildore Lopez",
                seat_no: "69F",
                gate: "D05",
                class: "ECONOMY",
                time: "13:30",
                date: "2021-JAN-13",
                status: "BRDNG",
                destination: {
                    from: {
                        code: "DVO",
                        name: "DAVAO INT'L AIRPORT"
                    },
                    to: {
                        code: "MNL",
                        name: "MAINLA INT'L AIRPORT"
                    }
                }

            }

        ],
        dataInput: {
            flight_no: null,
            passenger_name: null,
            seat_no: null,
            gate: null,

        },
        departureDestination: {
            id: "DVO",
            text: "Davao"
        },
        arrivalDestination: {
            id: "DVO",
            text: "Davao"
        },
        destinations: [
            { code: "DVO", name: "DAVAO INT'L AIRPORT" },
            { code: "CGY", name: "LAGUINDINGAN INT'L AIRPORT" },
            { code: "CEB", name: "MACTAN INT'L AIRPORT" }
        ],
        flightStatus: {
            id: "BRD",
            text: "BRDNG"

        },
        status: [
            { info: "BRDING", name: "BRDING" },
            { info: "DLYD", name: "DLYD" },
            { info: "CANCELLED", name: "CANCELLED" },

        ],
        flightClass: {
            id: "ECNMY",
            text: "ECONOMY"

        },
        fClass: [
            { info: "ECNMY", name: "ECONOMY" },
            { info: "BUS", name: "BUSINESS" },
            { info: "FIRST", name: "FIRSTCLASS" },

        ]
    },

    methods: {
        add() {
            console.log(this.dataInput)
            this.passengerInfos.push({
                flight_no: this.dataInput.flight_no,
                passenger_name: this.dataInput.passenger_name,
                seat_no:this.dataInput.seat_no,
                gate:this.dataInput.gate,
                class:this.flightClass.text,
                time: this.time,
                date: this.date ,
                status: this.flightStatus.id,
                destination: {
                    from: {
                        code: this.departureDestination.id,
                        name: this.departureDestination.text
                    },
                    to: {
                        code: this.arrivalDestination.id,
                        name: this.arrivalDestination.text
                        
                    }
                }


            });
            alert('successfully registered')
        }
    }

})
