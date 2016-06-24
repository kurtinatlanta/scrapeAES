var eventType = require('./eventType');
var exportedValue = '';

// var southernDream = 'PTAwMDAwMDg5NDc90';
// var boysWinterChamp = 'PTAwMDAwMDkwMjA90';
// var centralZoneInvitational = 'PTAwMDAwMDgyMzk90';
// var jjvaWinterBlast = 'PTAwMDAwMDg4MjA90';
// var k2EliteInvitational = 'PTAwMDAwMDg4ODU90';
// var icebreaker = 'PTAwMDAwMDg5NDg90';
// var k2wilderness = 'PTAwMDAwMDg4ODY90';
// var musicCityBlockParty = 'MjAxNl9NdXNpY19DaXR5X0Jsb2NrX1BhcnR50';
// var tallahasseeInviteAAU = 'PTAwMDAwMTA2MDE90';
// var tallahasseeInviteUSAV = 'PTAwMDAwMDg4NjY90';
// var k2Madness = 'PTAwMDAwMDg4ODc90';
// var firstLadies = 'PTAwMDAwMDg5NDk90';
// var spvb = 'PTAwMDAwMDg5MDc90';
// var lafata = 'PTAwMDAwMDgyNDA90';
// var beast = 'PTAwMDAwMDg5NTA90';
// var jaxJam = 'PTAwMDAwMDg4MTk90';
// var clubWestClassic = 'PTAwMDAwMDk3NzM90';
// var donnybrook = 'PTAwMDAwMDkwODU90';
// var nasa = 'PTAwMDAwMDkzMjE90';
// var aauSuperRegional = 'PTAwMDAwMDg2NTQ90';
// var farOut = 'RmFyX091dF9GZXN0aXZhbA2';
// var bluegrass = 'PTAwMDAwMDg3MTg90';
// var firstCoast = 'PTAwMDAwMDg4MjE90';
// var peachtree = 'PTAwMDAwMDkyNzc90';
// var disneyQualifier = 'PTAwMDAwMDkxNDg90';
// var mideast1 = 'PTAwMDAwMDgyMzM90';
// var northeast = 'PTAwMDAwMDgzMzk90';
// var youthFestival = 'PTAwMDAwMDkwODc90';
// var showMe = 'PTAwMDAwMDkxNTA90';
// var showMe2 = 'PTAwMDAwMDkxNDk90';
// var kudzu = 'PTAwMDAwMDkwODg90';
// var jjvaSpring = 'PTAwMDAwMDg4MjI90';
// var mideast2 = 'PTAwMDAwMDU5NTY90';
// var aauSuperRegional2 = 'PTAwMDAwMDYzMDM90';
// var srvaRegionals = 'PTAwMDAwMDg3NjY90';
// var loneStar = 'PTAwMDAwMDYwMTQ90';
// var powerRegionals = 'MjAxNV9TUlZBX0p1bmlvcl9SZWdpb25hbF9DaGFtcGlvbnNoaXBzX19fQXRsYW50YQ2';
// var boysEastCoast = 'PTAwMDAwMDY1Nzg90';
// var usavNationals = 'PTAwMDAwMDY1OTI90';
// var usavBoys = 'PTAwMDAwMDYyMzk90';
// var usav18 = 'PTAwMDAwMDkzNTk90';

var aauNationals = 'NDNyZF9BQVVfR2lybHNfX0p1bmlvcl9OYXRpb25hbF9Wb2xsZXliYWxsX0NoYW1waW9uc2hpcHM1';
var aauBoys = 'MjAxNl9BQVVfQm95c19fSnVuaW9yX05hdGlvbmFsX1ZvbGxleWJhbGxfQ2hhbXBpb25zaGlwcw2';
var usavGirls = 'PTAwMDAwMDkxNjc90';

if (eventType === 'aau') {
  exportedValue = aauNationals;
}
else if (eventType === 'usav') {
  exportedValue = usavGirls;
}

module.exports = exportedValue;
