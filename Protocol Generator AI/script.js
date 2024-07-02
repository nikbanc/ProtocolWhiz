let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;

// Array of quiz questions with options, correct answers, and protocol links
const quizArray = [
    {
        id: "0",
        question: "What document should be reviewed to determine if resuscitation should be withheld in a cardiac arrest situation?",
        options: [
            "Living will",
            "DNR/POLST form",
            "Medication list",
            "Medical history",
        ],
        correct: "DNR/POLST form",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf" // Replace with actual protocol link
    },
    // Add more questions as needed

    {
        id: "1",
        question:
            "Which medication is mentioned as part of the treatment for V-Fib or pulseless V-Tach?",
        //   you can't use less than and greater than symbol in html page just like that you have to write &lt; for less than and  &gt; for greater than.

        // for i am removing these symbols you can add them as your wish
        options: ["Lidocaine", "Adenosine", "Atropine", "Amiodarone"],
        correct: "Amiodarone",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "2",
        question:
            "Which of the following is NOT listed as a reversible cause of V-Fib or pulseless V-Tach?",
        options: ["Hypoglycemia", "Hypothermia", "Tension pneumothorax", "Hypertension"],
        correct: "Hypertension",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "3",
        question:
            "What is the recommended defibrillation energy dose for treating V-Fib or pulseless V-Tach according to the guideline?",
        options: ["100J", "360J", "150J", "200J"],
        correct: "360J",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "4",
        question:
            "What is the recommended action for a maternal arrest according to the policy?",
        options: ["Immediate notification to the Base Hospital and rapid transport.", "Notification to the Base Hospital without rapid transport.", "Wait for a specialist before taking any action.", "Immediate resuscitation without notifying the Base Hospital."],
        correct: "Immediate notification to the Base Hospital and rapid transport.",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"

    },

    {
        id: "5",
        question:
            "In the scenario of a resistant VF arrest, what is the appropriate action to take?",
        options: ["Call Base Hospital and await new directives.", "Establish IV/IO and wait for further instructions.", "Administer Calcium Chloride 1 gm immediately.", "Follow FP09 Cardiac Arrest Management."],
        correct: "Follow FP09 Cardiac Arrest Management.",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "6",
        question: "What should be done prior to administering the next medication after Calcium Chloride?",
        options: [
            "Change the IV line to a new one.",
            "Administer a 20ml flush IV/IO.",
            "Contact Base Hospital for further instructions.",
            "Administer Sodium Bicarbonate first.",
        ],
        correct: "Administer a 20ml flush IV/IO.",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },
    {
        id: "7",
        question: "How many refractory shocks administered before considering immediate transport?",
        options: [
            "4",
            "3",
            "2",
            "5",
        ],
        correct: "4",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },
    {
        id: "8",
        question: "What to do if non-shockable rythm persists for 30 minutes despite aggressive resuscitation efforts?",
        options: ["Contact base hospital", "Consider terminating resuscitation", "Continue resuscitation efforts", "All of the above"],
        correct: "Consider terminating resuscitation",
        protocolLink: "COCO PDF's Protocols/Policy_1004.pdf"
    },

    {
        id: "9",
        question: "Where must ROSC patients be transported?",
        options: [
            "closest ED",
            "closest STEMI Center",
            "CCRMC",
            "closest stroke center",
        ],
        correct: "closest STEMI Center",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "10",
        question: "Which is not a county required vital sign: ",
        options: [
            "blood pressure as age appropriate ",
            "palpated pulse rate",
            "respiratory rate",
            "ETCO2",
        ],
        correct: "ETCO2",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf"
    },

    {
        id: "11",
        question: "When should an adult patient be suspected of becoming acutely hypotensive ",
        options: [
            "systolic bp < 90",
            "systolic bp < 100",
            "systolic bp < 90 with poor skin signs",
            "closest stroke center",
        ],
        correct: "systolic bp < 90",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf"
    },

    {
        id: "12",
        question: "Fill in the blank. ___ may have atypical presentations of cardiac-related problems such as MI. ",
        options: [
            "geriatrics",
            "pediatrics",
            "diabetic pts, and women",
            "neonates",
        ],
        correct: "diabetic pts, and women",
        protocolLink: "COCO PDF's Protocols/AC08-ChestPain-STEMI.pdf"
    },

    {
        id: "13",
        question: "What is the definition of a pediatric pt? ",
        options: [
            "< 18 years of age",
            "< 16 years of age",
            "< 10 years of age",
            "< 15 years of age",
        ],
        correct: "< 15 years of age",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf"
    },

    {
        id: "14",
        question: "What is not an element of the pediatric assessment triangle? ",
        options: [
            "appearance",
            "activity",
            "work of breathing",
            "circulation",
        ],
        correct: "activity",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf"
    },

    {
        id: "15",
        question: "What is a crucial consideration when assessing a patient's capacity to refuse medical care? ",
        options: [
            "the availability of medical facilities within the vicinity",
            "the patient's ability to communicate a clear choice consistently over time",
            "the EMS provider's agreement with the patient's decision",
            "the severity of the patient's illness or medical condition",
        ],
        correct: "the patient's ability to communicate a clear choice consistently over time",
        protocolLink: "COCO PDF's Protocols/G01-Universal Patient Care.pdf"
    },

    {
        id: "16",
        question: "In the context of a patient without a DNR/POLST order where family objects to resuscitation, what should ems providers do? ",
        options: [
            "provide comfort care and initiate resuscitation if necessary",
            "transfer the patient to a medical facility for further evaluation",
            "wait for the family to resolve their objections before leaving the scene",
            "contact the base hospital to speak with the physician and proceed according to their advice",
        ],
        correct: "contact the base hospital to speak with the physician and proceed according to their advice",
        protocolLink: "COCO PDF's Protocols/G03-EndofLife.pdf"
    },

    {
        id: "17",
        question: "In the context of honoring a patient's DNR or POLST form, if the family member with decision-making authority is not present, what should EMS providers do? ",
        options: [
            "proceed with comfort care as outlined in the form",
            "contact the base hospital for guidance",
            "transport the patient to the closest ED",
            "wait for family member to arrive before starting any treatment",
        ],
        correct: "contact the base hospital for guidance",
        protocolLink: "COCO PDF's Protocols/G03-EndofLife.pdf"
    },

    {
        id: "18",
        question: "All are sepsis indicators except?",
        options: [
            "respiratory rate ≥ 20",
            "temperature > 100.4° or < 96.8°",
            "heart Rate > 90",
            "BP < 90",
            "suspected infection",
        ],
        correct: "bp < 90",
        protocolLink: "COCO PDF's Protocols/G04-Fever-InfectionControl.pdf"
    },

    {
        id: "19",
        question: "In the setting of a cardiac arrest, can any preexisting diaylsis shunt or external central venous catheter be used? ",
        options: [
            "true",
            "false",
        ],
        correct: "true",
        protocolLink: "COCO PDF's Protocols/G05-IVIOAccess.pdf"
    },

    {
        id: "20",
        question: "Can pre-existing indwelling central lines be used to deliver fluid and medications in patients who are hemodynamically unstable? ",
        options: [
            "true",
            "false",
        ],
        correct: "true",
        protocolLink: "COCO PDF's Protocols/G05-IVIOAccess.pdf"
    },

    {
        id: "21",
        question: "Can any prehospital fluids or medications approved for IV use also be given through an IO (intraosseous) route?",
        options: [
            "true",
            "false",
        ],
        correct: "true",
        protocolLink: "COCO PDF's Protocols/G05-IVIOAccess.pdf"
    },

    {
        id: "22",
        question: "At what age is external jugular vein access indicated for patients?",
        options: [
            "12 years and older",
            "15 years and older",
            "18 years and older",
            "5 years and older",
        ],
        correct: "15 years and older",
        protocolLink: "COCO PDF's Protocols/G05-IVIOAccess.pdf"
    },

    {
        id: "23",
        question: "Should patients be cardioverted or defibrillated if they are asymptomatic due to dysrhythmias?",
        options: [
            "true",
            "false",
        ],
        correct: "false",
        protocolLink: "COCO PDF's Protocols/AC06-Tachycardia.pdf"
    },

    {
        id: "24",
        question: "All are VAD centers except?",
        options: [
            "Stanford/Lucielle Packard - Palo Alto",
            "UC San Francisco - SF",
            "Kaiser - Santa Clara",
            "John Muir - Walnut Creek",
        ],
        correct: "John Muir - Walnut Creek",
        protocolLink: "COCO PDF's Protocols/G06-VAD.pdf"
    },

    {
        id: "25",
        question: "All are STEMI centers except?",
        options: [
            "John Muir - Concord",
            "John Muir - Walnut Creek",
            "Kaiser - Walnut Creek",
            "Kaiser - Antioch",
        ],
        correct: "Kaiser - Antioch",
        protocolLink: "COCO PDF's Protocols/AC08-ChestPain-STEMI.pdf"
    },

    {
        id: "26",
        question: "All are stroke centers except?",
        options: [
            "John Muir - Concord",
            "John Muir - Walnut Creek",
            "Kaiser - Richmond",
            "San Ramon Regional",
            "Kaiser - Antioch",
            "Kaiser - Walnut Creek",
        ],
        correct: "Kaiser - Richmond",
        protocolLink: "COCO PDF's Protocols/A18-SuspectedStroke.pdf"
    },

    {
        id: "27",
        question: "Patients with a STEMI needing interventional cardiac care require timely transfer. A door-to-balloon time of __ minutes or less at the sending facility is ideal.",
        options: [
            "10 minutes",
            "15 minutes",
            "20 minutes",
            "30 minutes",
        ],
        correct: "10 minutes",
        protocolLink: "COCO PDF's Protocols/I01-STEMITransfer.pdf"
    },

    {
        id: "28",
        question: "How long to check for a pulse during cardiac arrest? ",
        options: [
            "< 5 seconds",
            "< 10 seconds",
            "< 15 seconds",
            "< 30 seconds",
        ],
        correct: "< 5 seconds",
        protocolLink: "COCO PDF's Protocols/AC01-CardiacArrest.pdf"
    },

    {
        id: "29",
        question: "For suspected excited delirium consider fluid bolus early and contact base for ___ order ",
        options: [
            "d10",
            "epi 0.01",
            "calcium chloride",
            "sodium bicarb",
        ],
        correct: "sodium bicarb",
        protocolLink: "COCO PDF's Protocols/AC01-CardiacArrest.pdf"
    },

    {
        id: "30",
        question: "All of the following are determination of death criteria, except?",
        options: [
            "decomposition",
            "rigor mortis",
            "dependent lividity",
            "injury incompatible with life",
            "unwitness traumatic arrest with aystole",
            "unwitnessed traumatic arrest with PEA > 40",
        ],
        correct: "unwitnessed traumatic arrest with PEA > 40",
        protocolLink: "COCO PDF's Protocols/AC01-CardiacArrest.pdf"
    },

    {
        id: "31",
        question: "How many cycles of passive ventilation are required at the start of a cardiac arrest patient?",
        options: [
            "3",
            "4",
            "5",
            "2",
        ],
        correct: "3",
        protocolLink: "COCO PDF's Protocols/AC01-CardiacArrest.pdf"
    },

    {
        id: "32",
        question: "All of the following are reversible causes of cardiac arrest known as H’s and T’s, except? ",
        options: [
            "hypovolemia, hypoxia, hydrogen ion (acidosis)",
            "hypothermia, hypo/hyperkalemia, hypoglycemia, pulmonary thrombosis",
            "cardiomyopathy, commotio cordis",
            "tension pneumothorax, cardiac tamponade, toxins, coronary thrombosis",
        ],
        correct: "cardiomyopathy, commotio cordis",
        protocolLink: "COCO PDF's Protocols/AC01-CardiacArrest.pdf"
    },

    {
        id: "33",
        question: "If you suspect hyperkalemia during a cardiac arrest, what are the proper medication and respective doses to administer? (FP09)",
        options: [
            "Calcium Chloride 1 gm over 2-3 minutes, 20ml flush IV/IO prior to pushing next med, Sodium Bicarbonate 50 mEq IV/IO, 20ml flush IV/IO prior to pushing next med",
            "Calcium Chloride 1 gm over 3-5 minutes, 20ml flush IV/IO prior to pushing next med, Sodium Bicarbonate 100 mEq IV/IO, 20ml flush IV/IO prior to pushing next med",
            "Calcium Chloride 2 gms over 2-3 minutes, 20ml flush IV/IO prior to pushing next med, Sodium Bicarbonate 50 mEq IV/IO, 20ml flush IV/IO prior to pushing next med",
            "Calcium Chloride 1.5 gm over 3-5 minutes, 20ml flush IV/IO prior to pushing next med",
        ],
        correct: "Calcium Chloride 1 gm over 2-3 minutes, 20ml flush IV/IO prior to pushing next med, Sodium Bicarbonate 50 mEq IV/IO, 20ml flush IV/IO prior to pushing next med",
        protocolLink: "COCO PDF's Protocols/AC02-AsystolePea.pdf"
    },

    {
        id: "34",
        question: "What is the correct dose of epinephrine to be administered during a cardiac arrest and how often should it be given? (FP09) ",
        options: [
            "Epinephrine (0.1 mg/ml) 1 mg IV/IO every 4 minutes",
            "Epinephrine (0.1 mg/ml) 1 mg IV/IO every 5 minutes",
            "Epinephrine (1 mg/ml) 1 mg IV/IO every 4 minutes",
            "Epinephrine (0.01 mg/ml) 1 mg IV/IO every 4 minutes",
        ],
        correct: "Epinephrine (0.1 mg/ml) 1 mg IV/IO every 4 minutes",
        protocolLink: "COCO PDF's Protocols/AC02-AsystolePea.pdf"

    },

    {
        id: "35",
        question: "What is the correct dose of amiodarone to be administered and how many refractory shocks initially during arrest before administering? ",
        options: [
            "Amiodarone 300 mg IV/IO, May not repeat, deliver if refractory to third defib",
            "Amiodarone 150 mg IV/IO, May repeat 150mg if rhythm persists, deliver if refractory to third defib",
            "Amiodarone 150 mg IV/IO, May repeat 300mg if rhythm persists, deliver if refractory to second defib",
            "Amiodarone 300 mg IV/IO, May repeat 150mg if rhythm persists, deliver if refractory to third defib",
        ],
        correct: "Amiodarone 300 mg IV/IO, May repeat 150mg if rhythm persists, deliver if refractory to third defib",
        protocolLink: "COCO PDF's Protocols/AC03-VFIBTVTACH.pdf"
    },

    {
        id: "36",
        question: "What are your post-arrest ventilation and oxygenation targets? ",
        options: [
            "Maintain SpO2 at ≥ 94%, Maintain respiratory rate at 10/minute with EtCO2 35 – 45 mmHg",
            "Maintain SpO2 at ≥ 92%, Maintain respiratory rate at 12/minute with EtCO2 25 – 35 mmHg",
            "Maintain SpO2 at ≥ 96%, Maintain respiratory rate at 6/minute with EtCO2 35 – 45 mmHg",
            "Maintain SpO2 at ≥ 94%, Maintain respiratory rate at 10/minute with EtCO2 25 – 35 mmHg",
        ],
        correct: "Maintain SpO2 at ≥ 96%, Maintain respiratory rate at 6/minute with EtCO2 35 – 45 mmHg",
        protocolLink: "COCO PDF's Protocols/AC04-ROSC.pdf"
    },

    {
        id: "37",
        question: "How often should you cycle a blood pressure on a ROSC pt? ",
        options: [
            "Every 3 minutes",
            "Every 4 minutes",
            "Every 5 minutes",
            "Every 2 minutes",
        ],
        correct: "Every 3 minutes",
        protocolLink: "COCO PDF's Protocols/AC04-ROSC.pdf"
    },

    {
        id: "38",
        question: "All of the following are mechanism-based trauma activation criteria, except:  ",
        options: [
            "High risk auto crash, Partial or complete ejection, Significant passenger compartment intrusion ",
            "Roof intrusion  > 12” occupant site or >18” any site, Extrication of entrapped patient",
            "Death in same passenger compartment, Child (age 0-9yrs) unrestrained or in unsecured child safety seat. Fall from height > 10ft (all ages) ",
            "Auto vs. pedestrian/bicyclist thrown, run over, or with significant impact > 20 mph, Rider ejected (e.g. motorcycle, ATV, electric bicycle, horse, etc) > 20 mph ",
            "MVA > 40 mph, Rollover with unrestrained occupant, Significant injury from blunt assault with weapon (e.g. pipe, bat, golf club, etc) ",
        ],
        correct: "MVA > 40 mph, Rollover with unrestrained occupant, Significant injury from blunt assault with weapon (e.g. pipe, bat, golf club, etc) ",
        protocolLink: "COCO PDF's Protocols/T01-TraumaTriage.pdf"

    },


    {
        id: "39",
        question: "How do you handle a pediatric anaphylactic reaction that is not improving after multiple IM doses of epi? ",
        options: [
            "Administer another round of epi IM",
            "Contact base and prepare for IV epi administration",
            "Administer benadryl 50mg IV",
            "Contact base and prepare for push-dose epi administration",
        ],
        correct: "Contact base and prepare for IV epi administration",
        protocolLink: "COCO PDF's Protocols/P02-AllergicReactionAnaphylaxis.pdf"
    },


    {
        id: "40",
        question: "Per protocol, a Brue is defined at age ___ year who experienced an episode frightening to the observer that is characterized by: cyanosis or pallor, absent or irregular breathing, choking or gagging, change in muscle tone, altered level of consciousness. ",
        options: [
            "≤ 3",
            "≤ 6 months",
            "≤ 1",
            "≤ 2",
        ],
        correct: "≤ 1",
        protocolLink: "COCO PDF's Protocols/P02-AllergicReactionAnaphylaxis.pdf"
    },



    {
        id: "41",
        question: "Per protocol, what is status epilepticus in a pediatric patient? ",
        options: [
            "3 or more seizures in ≤ 5 minutes or any seizure lasting > 5 minutes",
            "2 or more seizures in ≤ 5 minutes or any seizure lasting > 5 minutes",
            "2 or more seizures in ≤ 5 minutes or any seizure lasting > 3 minutes",
            "2 or more seizures in ≤ 5 minutes or 2 seizures lasting > 5 minutes",
        ],
        correct: "2 or more seizures in ≤ 5 minutes or any seizure lasting > 5 minutes",
        protocolLink: "COCO PDF's Protocols/P12-Seizure.pdf"

    },


    {
        id: "42",
        question: "For a pediatric pt ≤ 40 kg in status epilepticus, what is the max single dose of midazolam and what is the preferred route? ",
        options: [
            "10mg IN",
            "5mg IM",
            "5mg IN",
            "5mg IV",
        ],
        correct: "5mg IN",
        protocolLink: "COCO PDF's Protocols/P12-Seizure.pdf"
    },


    {
        id: "43",
        question: "How many shocks before you should consider immediate transport in a pediatric cardiac arrest? ",
        options: [
            "1",
            "4",
            "2",
            "3",
        ],
        correct: "3",
        protocolLink: "COCO PDF's Protocols/PC03-VFIBVTACH.pdf"

    },

    {
        id: "44",
        question: "What is the proper medication and dose for a dystonic reaction? ",
        options: [
            "Diphenhydramine - 50mg IV/IM/IO",
            "Diphenhydramine - 25mg IV/IM/IO",
            "Glucagon - 5mg IV/IM/IO",
            "Sodium Bicarb/Calcium Chloride - 50mg IV/IM/IO",
        ],
        correct: "Diphenhydramine - 50mg IV/IM/IO",
        protocolLink: "COCO PDF's Protocols/A10-DystonicReaction.pdf"

    },


    {
        id: "45",
        question: " The following patients should receive half the dose of Epinephrine (0.15mg Epinephrine 1mg/ml) for the initial dose and any repeated doses while severely short of breath, except? ",
        options: [
            "Patient has a heart rate ≥ 150",
            "Patient with a suspected PE",
            "Patients over 50 years of age",
            "Patients with a history of coronary artery disease, MI, stents, CHF, cardiac surgery",
        ],
        correct: "Patient with a suspected PE",
        protocolLink: "COCO PDF's Protocols/A09-ShortnessofBreath.pdf"


    },


    {
        id: "46",
        question: "Age Dependent SBP for signs of shock. Which of these choices is incorrect? ",
        options: [
            "Over 65 years: <110 mmHg",
            "Over 10 years: < 80mmHg",
            "1-10 years: < 70mmHg + (age in years x2)",
            "Infant: < 70mmHg or weak pulses",
            "Neonate: < 60mmHg or weak pulses",
        ],
        correct: "Over 10 years: < 80mmHg",
        protocolLink: "COCO PDF's Protocols/A09-ShortnessofBreath.pdf"


    },


    {
        id: "47",
        question: "The use of epi is not indicated in traumatic arrests. ",
        options: [
            "True",
            "False",

        ],
        correct: "True",
        protocolLink: "COCO PDF's Protocols/A09-ShortnessofBreath.pdf"


    },


    {
        id: "48",
        question: " If the patient shows any sign of inadequate oxygenation, ventilate using BVM. What is the correct ventilation rate for infants? ",
        options: [
            "30 breaths per minut",
            "20 breaths per minute",
            "25 breaths per minutes",
            "35 breaths per minute",
        ],
        correct: "25 breaths per minutes",
        protocolLink: "COCO PDF's Protocols/A09-ShortnessofBreath.pdf"

    },


    {
        id: "49",
        question: "All of  following information is important for the IC to consider in making the best possible decision regarding requesting air resources, except: ",
        options: [
            "Patient need",
            "Weather at time of incident",
            "Estimated ground transport time versus air response and transport",
            "Proximity of a helispot or need for a helicopter/ambulance rendezvous site",
            "ETA of the helicopter",
        ],
        correct: "Weather at time of incident",
        protocolLink: "COCO PDF's Protocols/Policy_4005_Aircraft.pdf"

    },

];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", () => {
    questionCount += 1;

    if (questionCount === quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML =
            "Your Score is " + scoreCount + " out of " + quizArray.length;
    } else {
        countOfQuestion.innerHTML =
            "Question " + (questionCount + 1) + " of " + quizArray.length;
        quizDisplay(questionCount);
    }
});

function quizDisplay(questionCount) {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
}

function quizCreator() {
    quizArray.forEach((questionData, index) => {
        questionData.options.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = questionData.question;
        div.appendChild(question_DIV);

        let optionsHtml = '';
        questionData.options.forEach(option => {
            optionsHtml += `<button class="option-div" onclick="checker(this)"> ${option}</button>`;
        });
        div.innerHTML += optionsHtml;

        // Add View Protocol button
        let viewProtocolBtn = document.createElement("button");
        viewProtocolBtn.classList.add("view-protocol-btn", "hide");
        viewProtocolBtn.textContent = "View Protocol";
        viewProtocolBtn.dataset.protocolLink = questionData.protocolLink;
        viewProtocolBtn.onclick = function () {
            let protocolLink = this.dataset.protocolLink;
            window.open(protocolLink, "_blank"); // Open link in a new tab
        };
        div.appendChild(viewProtocolBtn);

        quizContainer.appendChild(div);
    });
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    // Check if user's answer is correct
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        // Highlight correct answer
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    // Disable all options after answer is chosen
    options.forEach((element) => {
        element.disabled = true;
    });

    // Show View Protocol button after an answer is chosen (whether correct or incorrect)
    let viewProtocolBtn = question.querySelector(".view-protocol-btn");
    viewProtocolBtn.classList.remove("hide");
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
