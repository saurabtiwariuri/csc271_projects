
var sign = "Libra";
var birthMonth = "October";
var birthDay = "22";
var luckyNumber = "0.0";
var horoscopeDescription = "Libra is a diplomatic and socially charming air sign ruled by Venus, symbolized by the scales to represent their lifelong pursuit of balance, justice, and harmony in relationships and surroundings.";
var beliefInAstrology = false;

var element = document.getElementById('sign');
element.innerHTML = sign;

element = document.getElementsByClassName('birthday');
element[0].innerHTML = birthMonth + " " + birthDay;

element = document.getElementsByClassName('luckyNum');
element[0].innerHTML = luckyNumber;

element = document.getElementsByTagName('p');
element[0].innerHTML = horoscopeDescription;
element[1].innerHTML += beliefInAstrology;

var libraMood = 4.0;

var capricornMood = 3.0;

var piscesMood = 3.0;

var averageMood = (libraMood + capricornMood + piscesMood)/3;

element[2].innerHTML = "Today's Mood Rating for Libra: " + libraMood + " out of 5. " + "The average mood rating of Leo, Libra, and Gemini is: " + averageMood;

var zodiacSigns = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var myZodiac = zodiacSigns[9];

var kevinsZodiac = zodiacSigns[2];

var ryansZodiac = zodiacSigns[0];

element[3].innerHTML = "My Zodiac sign is: " + myZodiac;

element[4].innerHTML = "Kevin's Zodiac sign is: " + kevinsZodiac;

element[5].innerHTML = "Ryan's Zodiac sign is: " + ryansZodiac;

var horoscopeDescriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.", 
    "Your determination will lead to success today. Stay focused on your goals.", 
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.", 
    "Trust your emotions. They will guide you in making the right choices."
]

var myDescription = horoscopeDescriptions[6];

var kevinsDescription = horoscopeDescriptions[2];

var ryansDescription = horoscopeDescriptions[0];

horoscopeDescriptions[6] = "You must balance deez nutz on your chin."

var myDescription = horoscopeDescriptions[6];

element[6].innerHTML = "Libra Horoscope: " + myDescription;
element[7].innerHTML = "Pisces Horoscope: " + kevinsDescription;
element[8].innerHTML = "Capricorn Horoscope: " + kevinsDescription;