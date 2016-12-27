let fixTeamName = require('./fixTeamName');

function fixAAUNames(teamName) {
  "use strict";
  let newTeamName = teamName;

  if (newTeamName.indexOf('(') > 0) {
    newTeamName = newTeamName.substr(0, (newTeamName.indexOf('(') - 1));
  }

  if (newTeamName.indexOf(' Volleyball Club') > 0) {
    newTeamName = newTeamName.replace(' Volleyball Club', '');
  }

  if (newTeamName.indexOf(' Volleyball') > 0) {
    newTeamName = newTeamName.replace(' Volleyball', '');
  }

  if (newTeamName.indexOf('Academy 13 AAU') === 0) {
    newTeamName = newTeamName.replace('Academy ', 'North Carolina Volleyball Academy ');
  }

  if (newTeamName.indexOf('ACV') === 0) {
    newTeamName = newTeamName.replace('ACV', 'Angels Country');
  }

  if (newTeamName.indexOf('AJV ') === 0) {
    newTeamName = newTeamName.replace('AJV ', 'Austin Juniors ');
    newTeamName = newTeamName.replace('MIZUNO ', 'Mizuno');
    newTeamName = newTeamName.replace('CEDAR PARK', 'Cedar Park');
    newTeamName = newTeamName.replace('NAVY', 'Navy');
  }

  if (newTeamName.indexOf('AP ') === 0) {
    newTeamName = newTeamName.replace('AP ', 'Austin Performance ');
  }

  if (newTeamName.indexOf('AVA -') === 0) {
    newTeamName = newTeamName.replace('AVA -', 'Arsenal');
  }

  if (newTeamName.indexOf('AZ Des Sky') === 0) {
    newTeamName = newTeamName.replace('AZ Des Sky', 'Arizona Desert Sky');
  }

  if (newTeamName.indexOf('BORINQUEN') === 0) {
    newTeamName = newTeamName.replace('BORINQUEN COQUI', 'Borinquen Coqui');
    newTeamName = newTeamName.replace('COLIN', 'Colin');
  }

  if (newTeamName.indexOf('CAPITAL CITY') === 0) {
    newTeamName = newTeamName.replace('CAPITAL CITY JUNIORS', 'Capital City Juniors');
  }

  if (newTeamName.indexOf('Carolina UVC') === 0) {
    newTeamName = newTeamName.replace('Carolina UVC', 'Carolina Union');
  }

  if (newTeamName.indexOf('Chas ') === 0) {
    newTeamName = newTeamName.replace('Chas ', 'Charleston ');
  }

  if (newTeamName.indexOf('Choo Choo ') === 0) {
    newTeamName = newTeamName.replace('VBC ', '');
  }

  if (newTeamName.indexOf('CJV') === 0) {
    newTeamName = newTeamName.replace('CJV', 'Carolina Juniors');
  }

  if (newTeamName.indexOf('Club Fusion') === 0) {
    newTeamName = newTeamName.replace('Black', ' Black');
    newTeamName = newTeamName.replace('Blue', ' Blue');
    newTeamName = newTeamName.replace('Cardinal', ' Cardinal');
    newTeamName = newTeamName.replace('Crimson', ' Crimson');
    newTeamName = newTeamName.replace('Red', ' Red');
    newTeamName = newTeamName.replace('Silver', ' Silver');
    newTeamName = newTeamName.replace('White', ' White');
  }

  if (newTeamName.indexOf('Club Savannah') === 0) {
    newTeamName = newTeamName.replace('premier', ' Premier');
  }

  if (newTeamName.indexOf('CNVBC') === 0) {
    newTeamName = newTeamName.replace('CNVBC', 'Columbus North');
  }

  if (newTeamName.indexOf('EC Power') === 0) {
    newTeamName = newTeamName.replace('EC Power', 'East Coast Power');
  }

  if (newTeamName.indexOf('ECJ ') === 0) {
    newTeamName = newTeamName.replace('ECJ ', 'Eastside Cleveland ');
  }

  if (newTeamName.indexOf('ECJVC') === 0) {
    newTeamName = newTeamName.replace('ECJVC', 'East Carolina');
  }

  if (newTeamName.indexOf('ECVBA') === 0) {
    newTeamName = newTeamName.replace('ECVBA', 'East County');
    newTeamName = newTeamName.replace('CARLOS', 'Carlos');
  }

  if (newTeamName.indexOf('EliteVBTC') === 0) {
    newTeamName = newTeamName.replace('EliteVBTC', 'Elite VBTC');
  }

  if (newTeamName.indexOf('Extreme Jr VBC') === 0) {
    newTeamName = newTeamName.replace('Extreme Jr VBC', 'Extreme Juniors');
  }

  if (newTeamName.indexOf('GBV') === 0) {
    newTeamName = newTeamName.replace('GBV', 'Gainesville Beach');
  }

  if (newTeamName.indexOf('GIOCCO TECH') === 0) {
    newTeamName = newTeamName.replace('GIOCCO TECH', 'Giocco Tech');
    newTeamName = newTeamName.replace('SUB', 'Sub');
  }

  if (newTeamName.indexOf('GSJ ') === 0) {
    newTeamName = newTeamName.replace('GSJ ', 'Grand Strand ');
  }

  if (newTeamName.indexOf('GVA') === 0) {
    newTeamName = newTeamName.replace('GVA/', 'GVA ');
    newTeamName = newTeamName.replace('MIZUNO', 'Mizuno');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
    newTeamName = newTeamName.replace('TEAL', 'Teal');
  }

  if (newTeamName.indexOf('Guaynabo City') === 0) {
    newTeamName = newTeamName.replace('mets', 'Mets');
  }

  if (newTeamName.indexOf('HIGH VOLTAGE') === 0) {
    newTeamName = newTeamName.replace('HIGH VOLTAGE', 'High Voltage');
    newTeamName = newTeamName.replace('LightningBolt', 'Lightning Bolt');
  }

  if (newTeamName.indexOf('HOTSHOTS') === 0) {
    newTeamName = newTeamName.replace('HOTSHOTS', 'Hot Shots');
  }

  if (newTeamName.indexOf('HV Adidas') === 0) {
    newTeamName = newTeamName.replace('HV Adidas', 'Huron Valley Adidas');
  }

  if (newTeamName.indexOf('KMVA') === 0) {
    newTeamName = newTeamName.replace('navy', ' Navy');
  }

  if (newTeamName.indexOf('LanikaiAthleticClub') === 0) {
    newTeamName = newTeamName.replace('LanikaiAthleticClub', 'Lanikai');
    newTeamName = newTeamName.replace('14Blk', '14 Black');
  }

  if (newTeamName.indexOf('LBVBC') === 0) {
    newTeamName = newTeamName.replace('LBVBC', 'Laguna Beach');
    newTeamName = newTeamName.replace('17Kevin', '17 Kevin');
  }

  if (newTeamName.indexOf('LEGACY ') === 0) {
    newTeamName = newTeamName.replace('LEGACY ', 'Legacy ');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.indexOf('Lions ') === 0) {
    newTeamName = newTeamName.replace('Lions ', '1st Alliance Lions ');
    newTeamName = newTeamName.replace('Red', ' Red');
    newTeamName = newTeamName.replace('Blue', ' Blue');
    newTeamName = newTeamName.replace('Navy', ' Navy');
    newTeamName = newTeamName.replace('Teal', ' Teal');
    newTeamName = newTeamName.replace('Silver', ' Silver');
  }

  if (newTeamName.indexOf('LVA') === 0) {
    newTeamName = newTeamName.replace('LVA', 'Lightning Volleyball Academy');
  }

  if (newTeamName.indexOf('MEVBA') === 0) {
    newTeamName = newTeamName.replace('MEVBA', 'Michigan Elite');
  }

  if (newTeamName.indexOf('MIAMI SELECT') === 0) {
    newTeamName = newTeamName.replace('MIAMI SELECT ', 'Miami Select ');
    newTeamName = newTeamName.replace(' BLACK', ' Black');
    newTeamName = newTeamName.replace(' BOYS', ' Boys');
  }

  if (newTeamName.indexOf('MIAMI XTREME') === 0) {
    newTeamName = newTeamName.replace('MIAMI XTREME VOLLEYBALL', 'Miami Xtreme');
  }

  if (newTeamName.indexOf('Mizuno Northern Lights') === 0) {
    newTeamName = newTeamName.replace('Mizuno Northern Lights', 'Northern Lights');
  }

  if (newTeamName.indexOf('Mizuno Sports Performance') === 0) {
    newTeamName = newTeamName.replace('Mizuno Sports Performance', 'Sports Performance');
  }

  if (newTeamName.indexOf('Mizuno WI') === 0) {
    newTeamName = newTeamName.replace('Mizuno WI', 'Wisconsin');
  }

  if (newTeamName.indexOf('MN North') === 0) {
    newTeamName = newTeamName.replace('MN', 'Minnesota');
  }

  if (newTeamName.indexOf('MN Select') === 0) {
    newTeamName = newTeamName.replace('MN', 'Minnesota');
  }

  if (newTeamName.indexOf('Neb Jrs') === 0) {
    newTeamName = newTeamName.replace('Neb Jrs', 'Nebraska Juniors');
  }

  if (newTeamName.indexOf('OVC Rampage') === 0) {
    newTeamName = newTeamName.replace('OVC', 'Owensboro');
  }

  if (newTeamName.indexOf('PIEDMONT VBC') === 0) {
    newTeamName = newTeamName.replace('PIEDMONT VBC', 'Piedmont');
    newTeamName = newTeamName.replace('VEDAT', 'Vedat');
    newTeamName = newTeamName.replace('BLAINE', 'Blaine');
    newTeamName = newTeamName.replace('KELLIE', 'Kellie');
    newTeamName = newTeamName.replace('KERRY', 'Kerry');
  }

  if (newTeamName.indexOf('PSVA') === 0) {
    newTeamName = newTeamName.replace('PSVA', 'Prostyle');
  }

  if (newTeamName.indexOf('ProLink') === 0) {
    newTeamName = newTeamName.replace('Nat', ' National');
  }

  if (newTeamName.indexOf('Protege') === 0) {
    newTeamName = newTeamName.replace('16Kim', '16 Kim');
  }

  if (newTeamName.indexOf('PVC ') === 0) {
    newTeamName = newTeamName.replace('PVC ', 'Powers ');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('PINK', 'Pink');
  }

  if (newTeamName.indexOf('QUEENS') === 0) {
    newTeamName = newTeamName.replace('QUEENS', ' Queens');
  }

  if (newTeamName.indexOf('RCVC') === 0) {
    newTeamName = newTeamName.replace('RCVC', 'Rocket City');
  }

  if (newTeamName.indexOf('Replay SELECT') === 0) {
    newTeamName = newTeamName.replace('SELECT', 'Select');
    newTeamName = newTeamName.replace('NAT', 'National');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.indexOf('RVC ') === 0) {
    newTeamName = newTeamName.replace('RVC ', 'Richmond ');
  }

  if (newTeamName.indexOf('RVCH ') === 0) {
    newTeamName = newTeamName.replace('RVCH ', 'Rainbows ');
  }

  if (newTeamName.indexOf('-GRIND') > 0) {
    newTeamName = newTeamName.replace('RVC ', 'Relentless ');
    newTeamName = newTeamName.replace('GRIND', 'Grind');
  }

  if (newTeamName.indexOf('SA Kryptonite') === 0) {
    newTeamName = newTeamName.replace('SA Kryptonite', 'San Antonio Kryptonite');
  }

  if (newTeamName.indexOf('SCVC') === 0) {
    newTeamName = newTeamName.replace('Roxy', ' Roxy');
  }

  if (newTeamName.indexOf('SDVBC') === 0) {
    newTeamName = newTeamName.replace('SDVBC', 'San Diego');
  }

  if (newTeamName.indexOf('ShamRo15\'s') === 0) {
    newTeamName = newTeamName.replace('ShamRo15\'s', 'ShamRocks 15\'s');
  }

  if (newTeamName.indexOf('SynergyForce') === 0) {
    newTeamName = newTeamName.replace('SynergyForce', 'Synergy Force');
  }

  if (newTeamName.indexOf('SVVC') === 0) {
    newTeamName = newTeamName.replace('SVVC', 'Snohomish Valley');
  }

  if (newTeamName.indexOf('TALONS') === 0) {
    newTeamName = newTeamName.replace('TALONS', 'Talons');
  }

  if (newTeamName.indexOf('Tianas') === 0) {
    newTeamName = newTeamName.replace('VC ', '');
  }

  if (newTeamName.indexOf('TIV') === 0) {
    newTeamName = newTeamName.replace('TIV', 'Texas Image');
  }

  if (newTeamName.indexOf('ToledoSTORM') === 0) {
    newTeamName = newTeamName.replace('ToledoSTORM', 'Toledo Storm');
  }

  if (newTeamName.indexOf('TOP SELECT') === 0) {
    newTeamName = newTeamName.replace('TOP SELECT', 'Top Select');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('AMANDA', 'Amanda');
    newTeamName = newTeamName.replace('BLAKE', 'Blake');
  }

  if (newTeamName.indexOf('Turistas ') === 0) {
    newTeamName = newTeamName.replace('ADVITL', 'Advitl');
  }

  if (newTeamName.indexOf('TVA ') === 0) {
    newTeamName = newTeamName.replace('SYSTEM', 'System');
    newTeamName = newTeamName.replace('MAGDIEL', 'Magdiel');
  }

  if (newTeamName.indexOf('TX Eclipse') === 0) {
    newTeamName = newTeamName.replace('TX Eclipse', 'Texas Eclipse');
  }

  if (newTeamName.indexOf('UNION') === 0) {
    newTeamName = newTeamName.replace('UNION', 'Union');
    newTeamName = newTeamName.replace('IN', 'Indiana');
    newTeamName = newTeamName.replace('KY', 'Kentucky');
  }

  if (newTeamName.indexOf('USA SOUTH') === 0) {
    newTeamName = newTeamName.replace('SOUTH', 'South');
    newTeamName = newTeamName.replace('PREMIER', 'Premier');
    newTeamName = newTeamName.replace('PURPLE', 'Purple');
  }

  if (newTeamName.indexOf('UVA ') === 0) {
    newTeamName = newTeamName.replace('UVA', 'Upontop');
    newTeamName = newTeamName.replace('\'S', '\'s');
    newTeamName = newTeamName.replace('NATIONAL', 'National');
    newTeamName = newTeamName.replace('SHOWCASE', 'Showcase');
    newTeamName = newTeamName.replace('NICK', 'Nick');
  }

  if (newTeamName.indexOf('vaqueras') === 0) {
    newTeamName = newTeamName.replace('vaqueras', 'Vaqueras');
    newTeamName = newTeamName.replace('14-2 danny', ' 14-2 Danny');
  }

  if (newTeamName.indexOf('VCVC') === 0) {
    newTeamName = newTeamName.replace('VCVC', 'Ventura County');
  }

  if (newTeamName.indexOf('VOLLEY TOP') === 0) {
    newTeamName = newTeamName.replace('VOLLEY TOP', 'Volley Top');
    newTeamName = newTeamName.replace('WES', 'Wes');
  }

  if (newTeamName.indexOf('VOLYCAY CAYEY') === 0) {
    newTeamName = newTeamName.replace('VOLYCAY CAYEY', ' Volycay Cayey');
  }

  if (newTeamName.indexOf('VVC') === 0) {
    newTeamName = newTeamName.replace('VVC', 'Vital');
  }

  if (newTeamName.indexOf('WEST') === 0) {
    newTeamName = newTeamName.replace('WEST', 'West');
    newTeamName = newTeamName.replace('Elite', ' Elite');
  }

  if (newTeamName.indexOf('WPVC') === 0) {
    newTeamName = newTeamName.replace('WPVC', 'Winter Park');
  }

  return newTeamName;
}

function fixUSAVNames(teamName) {
  "use strict";
  let newTeamName = teamName;

  if (newTeamName.indexOf('AJV') === 0) {
    newTeamName = newTeamName.replace('AJV', 'Austin Juniors');
  }

  if (newTeamName.indexOf('ARIZONA STORM') === 0) {
    newTeamName = newTeamName.replace('ARIZONA STORM', 'Arizona Storm');
    newTeamName = newTeamName.replace('THUNDER', 'Thunder');
  }

  if (newTeamName.indexOf('ASICS MAVS') === 0) {
    newTeamName = newTeamName.replace('ASICS ', '');
  }

  if (newTeamName.indexOf('AsicsWillowbrook') === 0) {
    newTeamName = newTeamName.replace('AsicsWillowbrook', 'Willowbrook ');
    newTeamName = newTeamName.replace('12Gold', '12 Gold');
    newTeamName = newTeamName.replace('16Gold', '16 Gold');
  }

  if (newTeamName.indexOf('ASPIRE') === 0) {
    newTeamName = newTeamName.replace('ASPIRE', 'Aspire');
  }

  if (newTeamName.indexOf('AVA TX') === 0) {
    newTeamName = newTeamName.replace('AVA TX', 'AVA Texas');
  }

  if (newTeamName.indexOf('AVC Clev') === 0) {
    newTeamName = newTeamName.replace('AVC Clev', 'AVC Cleveland');
  }

  if (newTeamName.indexOf('AZ EVJ') === 0) {
    newTeamName = newTeamName.replace('AZ EVJ', 'Arizona East Valley');
  }

  if (newTeamName.indexOf('AZ REV') === 0) {
    newTeamName = newTeamName.replace('AZ REV', 'Arizona Revolution');
  }

  if (newTeamName.indexOf('AZ Sky') === 0) {
    newTeamName = newTeamName.replace('AZ Sky', 'Arizona Sky');
  }

  if (newTeamName.indexOf('AZ SKY') === 0) {
    newTeamName = newTeamName.replace('AZ SKY', 'Arizona Sky');
  }

  if (newTeamName.indexOf('Balboa Bay') === 0) {
    newTeamName = newTeamName.replace('14Blue', '14 Blue');
  }

  if (newTeamName.indexOf('BEACH ELITE') === 0) {
    newTeamName = newTeamName.replace('BEACH ELITE', 'Beach Elite');
    newTeamName = newTeamName.replace('ADIDAS', 'Adidas');
  }

  if (newTeamName.indexOf('Brandywine') === 0) {
    newTeamName = newTeamName.replace('BAM', 'Bam');
  }

  if (newTeamName.indexOf('CIA') === 0) {
    newTeamName = newTeamName.replace('CIA', 'Club Iowa');
  }

  if (newTeamName.indexOf('CinciVB') === 0) {
    newTeamName = newTeamName.replace('CinciVB Acad', ' Cincinnati Volleyball Academy');
  }

  if (newTeamName.indexOf('CIS') === 0) {
    newTeamName = newTeamName.replace('CIS', 'Central Iowa Select');
  }

  if (newTeamName.indexOf('CJV') === 0) {
    newTeamName = newTeamName.replace('CJV', 'Carolina Juniors');
    newTeamName = newTeamName.replace(' - ', '-');
  }

  if (newTeamName.indexOf('CKVA') === 0) {
    newTeamName = newTeamName.replace('CKVA', 'Central Kentucky');
  }

  if (newTeamName.indexOf('Club One AZ') === 0) {
    newTeamName = newTeamName.replace('AZ', 'Arizona');
    newTeamName = newTeamName.replace('18Platinum', '18 Platinum');
    newTeamName = newTeamName.replace('17Platinum', '17 Platinum');
    newTeamName = newTeamName.replace('16Platinum', '16 Platinum');
    newTeamName = newTeamName.replace('15Platinum', '15 Platinum');
  }

  if (newTeamName.indexOf('COAST') === 0) {
    newTeamName = newTeamName.replace('COAST', 'Coast');
  }

  if (newTeamName.indexOf('CoJrs') === 0) {
    newTeamName = newTeamName.replace('CoJrs/Kaepa', 'Colorado Juniors');
    newTeamName = newTeamName.replace('17Peer', '17 Peer');
    newTeamName = newTeamName.replace('15Shannon', '15 Shannon');
    newTeamName = newTeamName.replace('14Matt', '14 Matt');
  }

  if (newTeamName.indexOf('CVC') === 0) {
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.indexOf('DYNASTY') === 0) {
    newTeamName = newTeamName.replace('DYNASTY', 'Dynasty');
  }

  if (newTeamName.indexOf('ECJ ') === 0) {
    newTeamName = newTeamName.replace('ECJ ', 'Eastside Cleveland ');
  }

  if (newTeamName.indexOf('EC Power') === 0) {
    newTeamName = newTeamName.replace('EC Power', 'East Cost Power');
  }

  if (newTeamName.indexOf('Edge VBC') === 0) {
    newTeamName = newTeamName.replace(' VBC', '');
  }

  if (newTeamName.indexOf('EP Diggers') === 0) {
    newTeamName = newTeamName.replace('EP Diggers', 'El Paso Diggers');
    newTeamName = newTeamName.replace('13Lutich', '13 Lutich');
    newTeamName = newTeamName.replace('12Hill', '12 Hill');
  }

  if (newTeamName.indexOf('FORZA') === 0) {
    newTeamName = newTeamName.replace('FORZA', 'Forza');
    newTeamName = newTeamName.replace('NORTH', 'North');
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.indexOf('FRVBC') === 0) {
    newTeamName = newTeamName.replace('FRVBC', 'Front Range');
  }

  if (newTeamName.indexOf('FSJ') === 0) {
    newTeamName = newTeamName.replace('FSJ', 'Fort Smith');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('DEWEY', 'Dewey');
    newTeamName = newTeamName.replace('WAACK', 'Waack');
    newTeamName = newTeamName.replace('SARGENT', 'Sargent');
    newTeamName = newTeamName.replace('NEELEY.S', 'Neeley.S');
    newTeamName = newTeamName.replace('NEVILLS', 'Nevills');
  }

  if (newTeamName.indexOf('GCVA') === 0) {
    newTeamName = newTeamName.replace('GCVA', 'Gulf Coast');
  }

  if (newTeamName.indexOf('HIC') === 0) {
    newTeamName = newTeamName.replace('HIC', 'High Country');
  }

  if (newTeamName.indexOf('HJV') === 0) {
    newTeamName = newTeamName.replace('HJV', 'Houston Juniors');
  }

  if (newTeamName.indexOf('H Skyline') === 0) {
    newTeamName = newTeamName.replace('H Skyline', 'Houston Skyline');
    // newTeamName = newTeamName.replace('RSB', 'RoShamBo');
  }

  if (newTeamName.indexOf('IGNITE') === 0) {
    newTeamName = newTeamName.replace('IGNITE', 'Ignite');
  }

  if (newTeamName.indexOf('Instinct') === 0) {
    newTeamName = newTeamName.replace('Instinct16', 'Instinct 16');
    newTeamName = newTeamName.replace('WTigers Wild G', 'White Tigers Wild Gold');
  }

  if (newTeamName.indexOf('IPVA') === 0) {
    newTeamName = newTeamName.replace('IPVA', 'Iowa Power');
  }

  if (newTeamName.indexOf('JJVA') === 0) {
    // newTeamName = newTeamName.replace('JJVA', 'Jacksonville Juniors');
    newTeamName = newTeamName.replace('TEAM', 'Team');
  }

  if (newTeamName.indexOf('KC POWER') === 0) {
    newTeamName = newTeamName.replace('KC POWER', 'KC Power');
  }

  if (newTeamName.indexOf('KU`IKAHI') === 0) {
    newTeamName = newTeamName.replace('KU`IKAHI', 'Ku`ikahi');
  }

  if (newTeamName.indexOf('LIVEWIRE') === 0) {
    newTeamName = newTeamName.replace('LIVEWIRE', 'Livewire');
  }

  if (newTeamName.indexOf('LoneStar') === 0) {
    newTeamName = newTeamName.replace('LoneStar', 'Lone Star');
  }

  if (newTeamName.indexOf('MADFROG') === 0) {
    newTeamName = newTeamName.replace('MADFROG', 'Madfrog');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('BOYS', 'Boys');
    newTeamName = newTeamName.replace('\'S', '\'s');
  }

  if (newTeamName.indexOf('MEVBA') === 0) {
    newTeamName = newTeamName.replace('MEVBA', 'Michigan Elite');
  }

  if (newTeamName.indexOf('Michio Chicago') === 0) {
    newTeamName = newTeamName.replace('12Natl', '12 National');
  }

  if (newTeamName.indexOf('Miz LB') === 0) {
    newTeamName = newTeamName.replace('Miz LB', 'Long Beach');
  }

  if (newTeamName.indexOf('MJVA') === 0) {
    newTeamName = newTeamName.replace('MJVA', 'Memphis Juniors');
  }

  if (newTeamName.indexOf('MVA ') === 0) {
    newTeamName = newTeamName.replace('ELITE', 'Elite');
  }

  if (newTeamName.indexOf('MVVC') === 0) {
    newTeamName = newTeamName.replace('MVVC', 'Mountain View');
  }

  if (newTeamName.indexOf('Nebraska ONE') === 0) {
    newTeamName = newTeamName.replace('ONE', 'One');
  }

  if (newTeamName.indexOf('NIVA') === 0) {
    newTeamName = newTeamName.replace('VOLT', 'Volt');
  }

  if (newTeamName.indexOf('NKYVC') === 0) {
    newTeamName = newTeamName.replace('NKYVC', 'Northern Kentucky');
  }

  if (newTeamName.indexOf('NPJ') === 0) {
    newTeamName = newTeamName.replace('NPJ', 'North Pacific Juniors');
  }

  if (newTeamName.indexOf('Ocean Breeze') === 0) {
    newTeamName = newTeamName.replace('Quiksilver', ' Quiksilver');
  }

  if (newTeamName.indexOf('OCVC') === 0) {
    newTeamName = newTeamName.replace('OCVC', 'Orange Coast');
  }

  if (newTeamName.indexOf('OJVA') === 0) {
    newTeamName = newTeamName.replace('OJVA', 'Oregon Juniors');
  }

  if (newTeamName.indexOf('Performance') === 0) {
    newTeamName = newTeamName.replace('NIKE', 'Nike');
  }

  if (newTeamName.indexOf('Pgh Elite') === 0) {
    newTeamName = newTeamName.replace('Pgh ', 'Pittsburgh ');
  }

  if (newTeamName.indexOf('Prime') === 0) {
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.indexOf('PSVA') === 0) {
    newTeamName = newTeamName.replace('PSVA', 'Prostyle');
  }

  if (newTeamName.indexOf('PSVBA') === 0) {
    newTeamName = newTeamName.replace('PSVBA', 'Puget Sound');
  }

  if (newTeamName.indexOf('PVC ') === 0) {
    newTeamName = newTeamName.replace('PVC ', 'Powers ');
  }

  if (newTeamName.indexOf('Rancho Valley') === 0) {
    newTeamName = newTeamName.replace('17Select', '17 Select');
    newTeamName = newTeamName.replace('16Premier', '16 Premier');
  }

  if (newTeamName.indexOf('Roch ') === 0) {
    newTeamName = newTeamName.replace('Roch PaceBootleggr', 'Rochester Pace Bootlegger ');
  }

  if (newTeamName.indexOf('SA STING') === 0) {
    newTeamName = newTeamName.replace('SA STING', 'San Antonio Sting');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.indexOf('SASVBC') === 0) {
    newTeamName = newTeamName.replace('SASVBC', 'Spike and Serve');
    newTeamName = newTeamName.replace('RED', 'Red');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.indexOf('SEATTLE JRS') === 0) {
    newTeamName = newTeamName.replace('SEATTLE JRS', 'Seattle Juniors');
  }

  if (newTeamName.indexOf('SF JRS') === 0) {
    newTeamName = newTeamName.replace('SF JRS', 'San Francisco Juniors');
  }

  if (newTeamName.indexOf('SG Elite') === 0) {
    newTeamName = newTeamName.replace('SG ', 'San Gabriel ');
    newTeamName = newTeamName.replace('13Elite', '13 Elite');
  }

  if (newTeamName.indexOf('SG ELITE') === 0) {
    newTeamName = newTeamName.replace('SG ', 'San Gabriel ');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('12Roshambo', '12 Roshambo');
    newTeamName = newTeamName.replace('16Roshambo', '16 Roshambo');
  }

  if (newTeamName.indexOf('SIVA') === 0) {
    newTeamName = newTeamName.replace('SIVA', 'Skagit Island');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.indexOf('SJVBC') === 0) {
    newTeamName = newTeamName.replace('SJVBC', 'San Juan');
  }

  if (newTeamName.indexOf('SNVC') === 0) {
    newTeamName = newTeamName.replace('SNVC', 'Summit Nitro');
  }

  if (newTeamName.indexOf('SoCal VBC') === 0) {
    newTeamName = newTeamName.replace(' VBC', '');
  }

  if (newTeamName.indexOf('Spike and Serve') === 0) {
    newTeamName = newTeamName.replace('BOYS', 'Boys');
  }

  if (newTeamName.indexOf('Springfield') === 0) {
    newTeamName = newTeamName.replace('16Blue', '16 Blue');
  }

  if (newTeamName.indexOf('SPORTIME') === 0) {
    newTeamName = newTeamName.replace('SPORTIME', 'Sportime');
    newTeamName = newTeamName.replace('GOLD', 'Gold');
  }

  if (newTeamName.indexOf('STC Stars') === 0) {
    newTeamName = newTeamName.replace('STC', 'St. Charles');
  }

  if (newTeamName.indexOf('TCVA') === 0) {
    newTeamName = newTeamName.replace('TCVA', 'TriCounty');
  }

  if (newTeamName.indexOf('TEXAS PISTOLS') === 0) {
    newTeamName = newTeamName.replace('TEXAS PISTOLS', 'Texas Pistols');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.indexOf('TJVBC') === 0) {
    newTeamName = newTeamName.replace('TJVBC', 'Tallahassee Juniors');
  }

  if (newTeamName.indexOf('TVC') === 0) {
    newTeamName = newTeamName.replace('TVC', 'Toledo');
  }

  if (newTeamName.indexOf('TxPerformance') === 0) {
    newTeamName = newTeamName.replace('TxPerformance', 'Texas Performance');
  }

  if (newTeamName.indexOf('UNION') === 0) {
    newTeamName = newTeamName.replace('UNION', 'Union');
    newTeamName = newTeamName.replace('IN', 'Indiana');
    newTeamName = newTeamName.replace('KY', 'Kentucky');
  }

  if (newTeamName.indexOf('USA SOUTH') === 0) {
    newTeamName = newTeamName.replace('SOUTH', 'South');
    newTeamName = newTeamName.replace('Purp', 'Purple');
  }

  if (newTeamName.indexOf('VA Juniors') === 0) {
    newTeamName = newTeamName.replace('VA', 'Virginia');
  }

  if (newTeamName.indexOf('Victory') === 0) {
    newTeamName = newTeamName.replace('Elite', ' Elite');
  }

  if (newTeamName.indexOf('WAVE ') === 0) {
    newTeamName = newTeamName.replace('WAVE ', 'Wave ');
  }

  newTeamName = newTeamName.replace(/\(.+\)$/g, '');
  return newTeamName;

  /*
   if (newTeamName.indexOf('PM_') === 0) {
   newTeamName = newTeamName.replace('PM_', '');
   }

   if ((newTeamName.indexOf('12- Jen') === 0) || (newTeamName.indexOf('13- Laney') === 0) || (newTeamName.indexOf('14- Allyson') === 0)
   || (newTeamName.indexOf('15- Kody') === 0) || (newTeamName.indexOf('16- Ben') === 0) || (newTeamName.indexOf('16- Charis') === 0)
   || (newTeamName.indexOf('17- Emily') === 0) || (newTeamName.indexOf('18- Tori') === 0)) {
   newTeamName = 'Gamecock ' + newTeamName.replace('- ', '-');
   }

   if ((newTeamName.indexOf('15-Ruffing') === 0) || (newTeamName.indexOf('16-Atchison') === 0)) {
   newTeamName = 'Blackswamp ' + newTeamName;
   }

   if (newTeamName.indexOf('16-HAM') === 0) {
   newTeamName = 'Lanier 16-Ham';
   }

   if (newTeamName.indexOf('14-1') === 0) {
   newTeamName = 'Aftershock 14-1';
   }

   if (newTeamName.indexOf('15-1') === 0) {
   newTeamName = 'Aftershock 15-1';
   }

   if (newTeamName.indexOf('15 Colorado Challenge') === 0) {
   newTeamName = 'White Tiger ' + newTeamName;
   }

   if (newTeamName.indexOf('16-1') === 0) {
   newTeamName = 'Aftershock 16-1';
   }

   if (newTeamName.indexOf('17-1 Black') === 0) {
   newTeamName = 'Aftershock 17-1 Black';
   }

   if (newTeamName.indexOf('17-2 Green') === 0) {
   newTeamName = 'Aftershock 17-2 Green';
   }

   if (newTeamName.indexOf('18U A GOZAR') === 0) {
   newTeamName = newTeamName.replace('GOZAR', 'Gozar');
   }

   if (newTeamName.indexOf('41 South') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('A5 South') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('A5 Mizuon') === 0) {
   newTeamName = newTeamName.replace('Mizuon', 'Mizuno');
   }

   if (newTeamName.indexOf('AFTERSHOCK') === 0) {
   newTeamName = newTeamName.replace('AFTERSHOCK', 'Aftershock');
   }

   if (newTeamName.indexOf('Alabama Elite') === 0) {
   newTeamName = newTeamName.replace(' VB', '');
   }

   if (newTeamName.indexOf('Alabama Juniors') === 0) {
   newTeamName = newTeamName.replace(' ALJRS 12-1', '');
   newTeamName = newTeamName.replace(' ALJRS 12-2', '');
   newTeamName = newTeamName.replace(' ALJRS 13-1', '');
   newTeamName = newTeamName.replace(' ALJRS 14-1', '');
   newTeamName = newTeamName.replace(' ALJRS 15-1', '');
   newTeamName = newTeamName.replace(' ALJRS 16-1', '');
   }

   if (newTeamName.indexOf('ALJRS') === 0) {
   newTeamName = newTeamName.replace('ALJRS', 'Alabama Juniors');
   }

   if (newTeamName.indexOf('Alliance') === 0) {
   newTeamName = newTeamName.replace('M\'boro', 'Murfreesboro');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Arsenal Volleyball Academy') === 0) {
   newTeamName = newTeamName.replace(' - ', ' ');
   }

   if (newTeamName.indexOf('AT LBoom') === 0) {
   newTeamName = newTeamName.replace('AT LBoom', 'Atlanta Boom');
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   }

   if (newTeamName.indexOf('ATL Boom') === 0) {
   newTeamName = newTeamName.replace('ATL Boom', 'Atlanta Boom');
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   newTeamName = newTeamName.replace('15Diamond', '15 Diamond');
   newTeamName = newTeamName.replace('16Diamond', '16 Diamond');
   }

   if (newTeamName.indexOf('Atlanta Boom') === 0) {
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   }

   if (newTeamName.indexOf('Atlanta Extreme') === 0) {
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('Austin Juniors') === 0) {
   newTeamName = newTeamName.replace('NAVY', 'Navy');
   }

   if (newTeamName.indexOf('BCVC') === 0) {
   newTeamName = newTeamName.replace('BCVC', 'Black Creek');
   }

   if (newTeamName.indexOf('Birmingham') === 0) {
   newTeamName = newTeamName.replace('Birmingham Volleyball Club', 'BVC');
   }

   if (newTeamName.indexOf('Boise VBC') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('BRAVO') === 0) {
   newTeamName = newTeamName.replace('BRAVO', 'Bravo ');
   }

   if (newTeamName.indexOf('BUEV') === 0) {
   newTeamName = newTeamName.replace('BUEV', 'Bay United Elite');
   }

   if (newTeamName.indexOf('BVA') === 0) {
   newTeamName = newTeamName.replace('BVA', 'Biltmore');
   newTeamName = newTeamName.replace('17E', '17 Elite');
   }

   if (newTeamName.indexOf('C1VB') === 0) {
   newTeamName = newTeamName.replace('C1VB', 'Carolina One');
   newTeamName = newTeamName.replace('Blk Grvl', 'Black Greenville');
   newTeamName = newTeamName.replace('Power Grvl', 'Power Greenville');
   }

   if (newTeamName.indexOf('C2 Attack') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('C4') === 0) {
   newTeamName = newTeamName.replace(' Explosive Volleyball Club', '');
   newTeamName = newTeamName.replace('NAVY', 'Navy');
   newTeamName = newTeamName.replace('SILVER', 'Silver');
   newTeamName = newTeamName.replace('C4 Navy', 'Navy');
   newTeamName = newTeamName.replace('C4 NAVY', 'Navy');
   newTeamName = newTeamName.replace('C4 SILVER', 'Silver');
   newTeamName = newTeamName.replace('C4 WHITE', 'White');
   }

   if (newTeamName.indexOf('Car. Islanders') === 0) {
   newTeamName = newTeamName.replace('Car. Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Car Islanders') === 0) {
   newTeamName = newTeamName.replace('Car Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Car .Islanders') === 0) {
   newTeamName = newTeamName.replace('Car .Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Carolina One') === 0) {
   newTeamName = newTeamName.replace('Pkns', 'Pickens');
   newTeamName = newTeamName.replace('Reg ', 'Regional');
   newTeamName = newTeamName.replace('Blk', 'Black');
   newTeamName = newTeamName.replace('Roy', 'Royal');
   newTeamName = newTeamName.replace('Grvl', 'Greenville');
   newTeamName = newTeamName.replace('Black Gr', 'Black Greenville');
   newTeamName = newTeamName.replace('Royal Gr', 'Royal Greenville');
   }

   if (newTeamName.indexOf('CCCVBC') === 0) {
   newTeamName = newTeamName.replace('CCCVBC', 'Choo Choo City');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('CC Force') === 0) {
   newTeamName = newTeamName.replace('CC Force', 'Corpus Christi Force');
   }

   if (newTeamName.indexOf('CCJ') === 0) {
   newTeamName = newTeamName.replace('CCJ', 'Capital City Juniors');
   newTeamName = newTeamName.replace('(BLACK)', 'Black');
   }

   if (newTeamName.indexOf('Central Georgia') === 0) {
   newTeamName = newTeamName.replace(' VB Association', '');
   }

   if (newTeamName.indexOf('Chicago Elite') === 0) {
   newTeamName = newTeamName.replace(' - ', '-');
   }

   if (newTeamName.indexOf('Chicago Jrs') === 0) {
   newTeamName = newTeamName.replace('Chicago Jrs', 'Chicago Juniors');
   }

   if (newTeamName.indexOf('Choo Choo') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('CFVC') === 0) {
   newTeamName = newTeamName.replace('CFVC', 'Central Florida');
   newTeamName = newTeamName.replace('18RED', '18 Red');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('CGVA') === 0) {
   newTeamName = newTeamName.replace('CGVA', 'Central Georgia ');
   }

   if (newTeamName.indexOf('Classic City') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Club Fusion') === 0) {
   newTeamName = newTeamName.replace('13Red', '13 Red');
   newTeamName = newTeamName.replace('14Black', '14 Black');
   newTeamName = newTeamName.replace('14Silver', '14 Silver');
   newTeamName = newTeamName.replace('15Silver', '15 Silver');
   newTeamName = newTeamName.replace('15White', '15 White');
   newTeamName = newTeamName.replace('16Black', '16 Black');
   newTeamName = newTeamName.replace('16Blue', '16 Blue');
   newTeamName = newTeamName.replace('16Cardinal', '16 Cardinal');
   newTeamName = newTeamName.replace('16Crimson', '16 Crimson');
   newTeamName = newTeamName.replace('16Red', '16 Red');
   newTeamName = newTeamName.replace('16Silver', '16 Silver');
   newTeamName = newTeamName.replace('16White', '16 White');
   newTeamName = newTeamName.replace('17Black', '17 Black');
   newTeamName = newTeamName.replace('17Blue', '17 Blue');
   newTeamName = newTeamName.replace('17Red', '17 Red');
   newTeamName = newTeamName.replace('17Silver', '17 Silver');
   newTeamName = newTeamName.replace('17White', '17 White');
   newTeamName = newTeamName.replace('18Blacke', '18 Black');
   newTeamName = newTeamName.replace('18Blue', '18 Blue');
   newTeamName = newTeamName.replace('18Red', '18 Red');
   newTeamName = newTeamName.replace('18Silver', '18 Silver');
   newTeamName = newTeamName.replace('18White', '18 White');
   }

   if (newTeamName.indexOf('CLUB ONE') === 0) {
   newTeamName = newTeamName.replace('CLUB ONE', 'Club One');
   }

   if (newTeamName.indexOf('Coast') === 0) {
   newTeamName = newTeamName.replace('MIZUNO', 'Mizuno');
   newTeamName = newTeamName.replace('North18', 'North 18');
   }

   if (newTeamName.indexOf('COLAVOL') === 0) {
   newTeamName = newTeamName.replace('COLAVOL VBC', 'COLAVOL');
   }

   if (newTeamName.indexOf('Conway Jrs') === 0) {
   newTeamName = newTeamName.replace('Jrs', 'Juniors');
   }

   if (newTeamName.indexOf('CR_Carolina UVC') === 0) {
   newTeamName = newTeamName.replace('CR_Carolina UVC', 'Carolina Union');
   }

   if (newTeamName.indexOf('Crossfire') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Crossfire MN') === 0) {
   newTeamName = newTeamName.replace('MN', 'Minnesota');
   }

   if (newTeamName.indexOf('CSVC') === 0) {
   newTeamName = newTeamName.replace('CSVC', 'Carolina Select');
   }

   if (newTeamName.indexOf('CUVC') === 0) {
   newTeamName = newTeamName.replace('CUVC', 'Carolina Union');
   }

   if ((newTeamName.indexOf('CVA') === 0) && (newTeamName.indexOf('Colorado') < 0)) {
   newTeamName = newTeamName.replace('CVA', 'Columbus Volleyball Academy');
   }

   if (newTeamName.indexOf('Dynamite') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Eastside ClevelandVC') === 0) {
   newTeamName = newTeamName.replace('ClevelandVC', 'Cleveland');
   }

   if (newTeamName.indexOf('The EDGE') === 0) {
   newTeamName = newTeamName.replace('EDGE', 'Edge');
   }

   if (newTeamName.indexOf('Ellis Co') === 0) {
   newTeamName = newTeamName.replace('Ellis Co', 'Ellis County');
   newTeamName = newTeamName.replace('Nat', 'National');
   }

   if (newTeamName.indexOf('ESVBC') === 0) {
   newTeamName = newTeamName.replace('ESVBC', 'Eastside');
   }

   if (newTeamName.indexOf('Ethos') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Elevation') === 0) {
   newTeamName = newTeamName.replace('LovMah', 'National 1');
   }

   if (newTeamName.indexOf('ESVC') === 0) {
   newTeamName = newTeamName.replace('ESVC', 'Eastern Shore');
   }

   if (newTeamName.indexOf('EXCEL') === 0) {
   newTeamName = newTeamName.replace('EXCEL', 'Excel');
   }

   if (newTeamName.indexOf('EXTREME MAVS') === 0) {
   newTeamName = newTeamName.replace('EXTREME', 'Extreme');
   }

   if (newTeamName.indexOf('FDL Fusion') === 0) {
   newTeamName = newTeamName.replace('FDL', 'Fond du Lac');
   }

   if (newTeamName.indexOf('Forza1') === 0) {
   newTeamName = newTeamName.replace('ASICS', 'Asics');
   }

   if (newTeamName.indexOf('FPVA') === 0) {
   newTeamName = newTeamName.replace('FPVA', 'Florida Premier');
   }

   if (newTeamName.indexOf('Frisco Flyers') === 0) {
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Front Range') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('FSVBC') === 0) {
   newTeamName = newTeamName.replace('FSVBC SUNS', 'Florida Suns');
   newTeamName = newTeamName.replace('Black', ' Black');
   }

   if (newTeamName.indexOf('FW ') === 0) {
   newTeamName = newTeamName.replace('FW Fire', 'Ft Worth Fire');
   newTeamName = newTeamName.replace('FW FIre', 'Ft Worth Fire');
   newTeamName = newTeamName.replace('FW FIRE', 'Ft Worth Fire');
   newTeamName = newTeamName.replace('11Purple', '11 Purple');
   newTeamName = newTeamName.replace('15Black', '15 Black');
   newTeamName = newTeamName.replace('15White', '15 White');
   newTeamName = newTeamName.replace('16Purple', '16 Purple');
   newTeamName = newTeamName.replace('16White', '16 White');
   newTeamName = newTeamName.replace('17BROOKS', '17 Brooks');
   }

   if (newTeamName.indexOf('GEVA') === 0) {
   newTeamName = newTeamName.replace('GEVA', 'Guaynabo Elite');
   newTeamName = newTeamName.replace('UNDER', 'Under');
   }

   if (newTeamName.indexOf('GJVC') === 0) {
   newTeamName = newTeamName.replace('GJVC', 'Georgia Juniors');
   }

   if (newTeamName.indexOf('Guns Up') === 0) {
   newTeamName = newTeamName.replace('VBC ', ' ');
   }

   if (newTeamName.indexOf('H2 STL') === 0) {
   newTeamName = newTeamName.replace('UnderArmour', 'Under Armour');
   }

   if (newTeamName.indexOf('HPSTL') === 0) {
   newTeamName = newTeamName.replace('HPSTL', 'High Performance St. Louis');
   }

   if (newTeamName.indexOf('Hurricane VBC') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('ICT MAVS') === 0) {
   newTeamName = newTeamName.replace('ICT MAVS', 'ICT Mavs');
   }

   if (newTeamName.indexOf('IlliniElite16Cardinal') === 0) {
   newTeamName = newTeamName.replace('IlliniElite16Cardinal', 'Illini Elite 16 Cardinal');
   }

   if (newTeamName.indexOf('IVC') === 0) {
   newTeamName = newTeamName.replace('IVC -', 'Intensity');
   }

   if (newTeamName.indexOf('JVC') === 0) {
   newTeamName = newTeamName.replace('JVC', 'Jupiter');
   }

   if (newTeamName.indexOf('K2 Volleyball') === 0) {
   newTeamName = newTeamName.replace('K2 Volleyball', 'K2');
   }

   if (newTeamName.indexOf('Kaepa BL') === 0) {
   newTeamName = newTeamName.replace('Kaepa BL', 'Kaepa Borderline');
   }

   if (newTeamName.indexOf('Knoxville') === 0) {
   newTeamName = newTeamName.replace('RED', 'Red');
   newTeamName = newTeamName.replace('17Emilee', 'Emilee');
   }

   if (newTeamName.indexOf('KPVA') === 0) {
   newTeamName = newTeamName.replace('ELITES', 'Elites');
   }

   if (newTeamName.indexOf('KVA') === 0) {
   newTeamName = newTeamName.replace('14Carmen', '14 Carmen');
   newTeamName = newTeamName.replace('13White', '13 White');
   newTeamName = newTeamName.replace('12Joe', '12 Joe');
   }

   if (newTeamName.indexOf('KVC') === 0) {
   newTeamName = newTeamName.replace('KVC', 'Kingsport');
   }

   if (newTeamName.indexOf('Lake VBC') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('Lanier') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   newTeamName = newTeamName.replace(' 13-Kirby', 'Kirby');
   newTeamName = newTeamName.replace(' 14-Mary', 'Mary');
   newTeamName = newTeamName.replace(' 14-Michele', 'Michele');
   newTeamName = newTeamName.replace(' 15-Sam', 'Sam');
   newTeamName = newTeamName.replace(' 15-Jimmy', 'Jimmy');
   newTeamName = newTeamName.replace(' 16-Amanda', 'Amanda');
   newTeamName = newTeamName.replace(' 16-Melinda', 'Melinda');
   newTeamName = newTeamName.replace(' 17 Kim', 'Kim');
   }

   if (newTeamName.indexOf('LAV') === 0) {
   newTeamName = newTeamName.replace('LAV', 'Lower Alabama');
   }

   if (newTeamName.indexOf('Lex United') === 0) {
   newTeamName = newTeamName.replace('Lex United', 'Lexington United');
   }

   if (newTeamName.indexOf('liga voleibol bogota') === 0) {
   newTeamName = newTeamName.replace('liga voleibol bogota', 'Liga Voleibol Bogota');
   }

   if (newTeamName.indexOf('Lions') === 0) {
   newTeamName = newTeamName.replace('14Blue', '14 Blue');
   }

   if (newTeamName.indexOf('LVBR') === 0) {
   newTeamName = newTeamName.replace('LVBR', 'Louisiana Baton Rouge');
   }

   if (newTeamName.indexOf('LVL') === 0) {
   newTeamName = newTeamName.replace('LVL', 'Louisiana Lafayette');
   }

   if (newTeamName.indexOf('Madison') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('MADISON COUNTY') === 0) {
   newTeamName = newTeamName.replace('MADISON COUNTY ACE', 'Madison County Ace');
   newTeamName = newTeamName.replace(' 141', '');
   }

   if (newTeamName.indexOf('matrix') === 0) {
   newTeamName = newTeamName.replace('matrix', 'Matrix');
   }

   if (newTeamName.indexOf('MAVBC') === 0) {
   newTeamName = newTeamName.replace('MAVBC', 'Metro American');
   }

   if (newTeamName.indexOf('MAVERICK') === 0) {
   newTeamName = newTeamName.replace('MAVERICK', 'Maverick');
   }

   if (newTeamName.indexOf('Mem Metro') === 0) {
   newTeamName = newTeamName.replace('Mem Metro', 'Memphis Metro');
   }

   if (newTeamName.indexOf('METRO VOLLEYBALL') === 0) {
   newTeamName = newTeamName.replace('METRO VOLLEYBALL CLUB- ATL', 'Metro Atlanta');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('METRO-ATL') === 0) {
   newTeamName = newTeamName.replace('METRO-ATL', 'Metro Atlanta');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('MEVC') === 0) {
   newTeamName = newTeamName.replace('14Power', ' 14 Power');
   newTeamName = newTeamName.replace('17Power', ' 17 Power');
   newTeamName = newTeamName.replace('MEVC', 'Mountain Elite');
   }

   if (newTeamName.indexOf('MIDTN') === 0) {
   newTeamName = newTeamName.replace('MIDTN', 'MidTN');
   newTeamName = newTeamName.replace('NORTH', 'North');
   }

   if (newTeamName.indexOf('Mid TN') === 0) {
   newTeamName = newTeamName.replace('1 1', '1');
   }

   if (newTeamName.indexOf('Milw Sting') === 0) {
   newTeamName = newTeamName.replace('Milw Sting', 'Milwaukee Sting');
   }

   if (newTeamName.indexOf('MMTSC') === 0) {
   newTeamName = newTeamName.replace('MMTSC', 'Momentus');
   }

   if (newTeamName.indexOf('MSLCT') === 0) {
   newTeamName = newTeamName.replace('MSLCT', 'Miami Select');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('MVA') === 0) {
   newTeamName = newTeamName.replace('MVA', 'Miami Volleyball Academy');
   }

   if (newTeamName.indexOf('MVC') === 0) {
   newTeamName = newTeamName.replace('MVC', 'Madison');
   }

   if (newTeamName.indexOf('N. Alabama') === 0) {
   newTeamName = newTeamName.replace(' NACAV 142', '');
   }

   if (newTeamName.indexOf('N GA Aces') === 0) {
   newTeamName = newTeamName.replace('N GA', 'North Georgia');
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('NAVC') === 0) {
   newTeamName = newTeamName.replace('NAVC', 'North Atlanta');
   newTeamName = newTeamName.replace(' - ', '-');
   }

   if (newTeamName.indexOf('NBVBC') === 0) {
   newTeamName = newTeamName.replace('NBVBC', 'Naletre Beach');
   }

   if (newTeamName.indexOf('NCVC') === 0) {
   newTeamName = newTeamName.replace('NCVC', 'Northern California');
   }

   if (newTeamName.indexOf('Neb Impact') === 0) {
   newTeamName = newTeamName.replace('Neb Impact', 'Nebraska Impact');
   }

   if (newTeamName.indexOf('NF PIRATES') === 0) {
   newTeamName = newTeamName.replace('NF PIRATES', 'North Florida Pirates');
   newTeamName = newTeamName.replace('GOLD', 'Gold');
   }

   if (newTeamName.indexOf('Nfinity VBC') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('NGACE') === 0) {
   newTeamName = newTeamName.replace('NGACE', 'North Georgia Aces ');
   }

   if (newTeamName.indexOf('NI Thunder') === 0) {
   newTeamName = newTeamName.replace('NI Thunder', 'North Idaho Thunder');
   }

   if (newTeamName.indexOf('NM Jrs') === 0) {
   newTeamName = newTeamName.replace('NM Jrs', 'New Mexico Juniors');
   }

   if (newTeamName.indexOf('NNJ') === 0) {
   newTeamName = newTeamName.replace('NNJ', 'Northern Nevada');
   }

   if (newTeamName.indexOf('North Atlanta') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('OEV') === 0) {
   newTeamName = newTeamName.replace('OEV', 'Oakland Elite');
   }

   if (newTeamName.indexOf('Ohana') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('OP2') === 0) {
   newTeamName = newTeamName.replace('SMACK', 'Smack');
   }

   if (newTeamName.indexOf('OT ') === 0) {
   newTeamName = newTeamName.replace('OT ', 'OVA/TBVA ');
   }

   if (newTeamName.indexOf('Pacific Jrs') === 0) {
   newTeamName = newTeamName.replace('Jrs', 'Juniors');
   }

   if (newTeamName.indexOf('Pineapple') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('PITT PREMIER') === 0) {
   newTeamName = newTeamName.replace('PITT PREMIER', 'Pittsburgh Premier');
   }

   if (newTeamName.indexOf('PLVC') === 0) {
   newTeamName = newTeamName.replace('PLVC', 'Parkway Lightning');
   }

   if (newTeamName.indexOf('Play Like Winners') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('PoWer GB') === 0) {
   newTeamName = newTeamName.replace('PoWer GB', 'PoWer Green Bay');
   }

   if (newTeamName.indexOf('PR_KY') === 0) {
   newTeamName = newTeamName.replace('PR_KY STARZ', 'KY Starz');
   newTeamName = newTeamName.replace(' 12R-1', '');
   newTeamName = newTeamName.replace(' 12R-2', '');
   newTeamName = newTeamName.replace(' 13R-1', '');
   newTeamName = newTeamName.replace(' 13R-2', '');
   newTeamName = newTeamName.replace(' 15T-1', '');
   newTeamName = newTeamName.replace(' 15R-1', '');
   newTeamName = newTeamName.replace(' 16T-1', '');
   newTeamName = newTeamName.replace(' 17T-1', '');
   }

   if (newTeamName.indexOf('PR_MAVA') === 0) {
   newTeamName = newTeamName.replace('PR_MAVA', 'MAVA');
   }

   if (newTeamName.indexOf('PSV') === 0) {
   newTeamName = newTeamName.replace('PSV', 'Prostyle');
   }

   if (newTeamName.indexOf('Queens') === 0) {
   newTeamName = newTeamName.replace('richard', 'Richard');
   }

   if (newTeamName.indexOf('R Thunder') === 0) {
   newTeamName = newTeamName.replace('R Thunder', 'Rockwood Thunder');
   }

   if (newTeamName.indexOf('Rancho Valley') === 0) {
   newTeamName = newTeamName.replace('14Premier', '14 Premier');
   }

   if (newTeamName.indexOf('Rocket City') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Rockwood Thunder') === 0) {
   newTeamName = newTeamName.replace('Mizuno', ' Mizuno');
   }

   if (newTeamName.indexOf('ROX') > 0) {
   newTeamName = newTeamName.replace('ROX', 'Rox');
   }

   if (newTeamName.indexOf('RRVC') > 0) {
   newTeamName = newTeamName.replace('RRVC', 'Rox Rainbows');
   }

   if (newTeamName.indexOf('SA MAGIC') === 0) {
   newTeamName = newTeamName.replace('SA MAGIC', 'San Antonio Magic');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('SBVC') === 0) {
   newTeamName = newTeamName.replace('SBVC', 'Santa Barbara');
   }

   if (newTeamName.indexOf('SC Midlands') === 0) {
   newTeamName = newTeamName.replace('Nat', 'National');
   }

   if (newTeamName.indexOf('SDVC') === 0) {
   newTeamName = newTeamName.replace('SDVC', 'South Dade');
   }

   if (newTeamName.indexOf('SIVBC') === 0) {
   newTeamName = newTeamName.replace('SIVBC', 'Sudden Impact');
   }

   if (newTeamName.indexOf('SLVVC') === 0) {
   newTeamName = newTeamName.replace('SLVVC', 'St. Louis Vision');
   }

   if ((newTeamName.indexOf('South Perf') === 0) || (newTeamName.indexOf('Southern Perf') === 0)) {
   newTeamName = newTeamName.replace('Southern Perf', 'Southern Performance');
   newTeamName = newTeamName.replace('South Perf', 'Southern Performance');
   newTeamName = newTeamName.replace('NAT', 'National');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Southern Strikers') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   newTeamName = newTeamName.replace(' SSVBC 151', '');
   newTeamName = newTeamName.replace(' SSVBC 161', '');
   newTeamName = newTeamName.replace(' SSVBC 171', '');
   }

   if (newTeamName.indexOf('Southwest') === 0) {
   newTeamName = newTeamName.replace('Southwest15', 'Southwest 15');
   newTeamName = newTeamName.replace('Southwest16', 'Southwest 16');
   newTeamName = newTeamName.replace('Southwest17', 'Southwest 17');
   newTeamName = newTeamName.replace('ROX', 'Rox');
   }

   if (newTeamName.indexOf('Spartan Volleyball') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Spiketown') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('SPIRIT') === 0) {
   newTeamName = newTeamName.replace('SPIRIT', 'Spirit');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('SPVB') === 0) {
   newTeamName = newTeamName.replace('SPVB', 'Sports Performance');
   }

   if (newTeamName.indexOf('SPVC') === 0) {
   newTeamName = newTeamName.replace('SPVC', 'Sacramento Performance');
   }

   if (newTeamName.indexOf('SSVB') === 0) {
   newTeamName = newTeamName.replace('SSVB', 'Southern Select');
   }

   if (newTeamName.indexOf('SSVC') === 0) {
   newTeamName = newTeamName.replace('SSVC', 'Silver State');
   }

   if (newTeamName.indexOf('Supernova') === 0) {
   newTeamName = newTeamName.replace('BLACK', 'Black');
   newTeamName = newTeamName.replace('GRAY', 'Gray');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Swarm') === 0) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('SWVBC') === 0) {
   newTeamName = newTeamName.replace('SWVBC', 'Southwest Milwaukee');
   }

   if (newTeamName.indexOf('TAV') === 0) {
   newTeamName = newTeamName.replace('TAV', 'Texas Advantage');
   }

   if (newTeamName.indexOf('TCV') === 0) {
   newTeamName = newTeamName.replace('TCV', 'TriCounty');
   }

   if (newTeamName.indexOf('Team D ') === 0) {
   newTeamName = newTeamName.replace('Team D ', 'Team Detroit ');
   }

   if (newTeamName.indexOf('Team Momentum') === 0) {
   newTeamName = newTeamName.replace('15Navy', '15 Navy');
   }

   if (newTeamName.indexOf('TEXAS FURY') === 0) {
   newTeamName = newTeamName.replace('TEXAS FURY', 'Texas Fury');
   }

   if (newTeamName.indexOf('TEXAS STARS') === 0) {
   newTeamName = newTeamName.replace('TEXAS STARS-', 'Texas Stars');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('THUNDER BAY') === 0) {
   newTeamName = newTeamName.replace('THUNDER BAY', 'Thunder Bay');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('TI Elite') === 0) {
   newTeamName = newTeamName.replace('TI Elite', 'Team Indiana Elite');
   }

   if (newTeamName.indexOf('TLVC') === 0) {
   newTeamName = newTeamName.replace('TLVC', 'Team Life');
   }

   if (newTeamName.indexOf('TRIVOLLEY') === 0) {
   newTeamName = newTeamName.replace('TRIVOLLEY', 'Trivolley');
   }

   if (newTeamName.indexOf('Tsunami DKB') === 0) {
   newTeamName = newTeamName.replace('DKB', 'DeKalb');
   }

   if (newTeamName.indexOf('Tsunami Dekalb') === 0) {
   newTeamName = newTeamName.replace('Dekalb', 'DeKalb');
   newTeamName = newTeamName.replace('BILL', 'Bill');
   newTeamName = newTeamName.replace('BRUCE', 'Bruce');
   newTeamName = newTeamName.replace('JAMES', 'James');
   newTeamName = newTeamName.replace('LIZ', 'Liz');
   newTeamName = newTeamName.replace('TED', 'Ted');
   newTeamName = newTeamName.replace('VICKI', 'Vicki');
   }

   if (newTeamName.indexOf('TSUNAMI ROME') === 0) {
   newTeamName = newTeamName.replace('TSUNAMI ROME', 'Tsunami Rome');
   newTeamName = newTeamName.replace('MIKA', 'Mika');
   }

   if (newTeamName.indexOf('Tsunami Volleyball') === 0) {
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('TSUNAMI VOLLEYBALL') === 0) {
   newTeamName = newTeamName.replace('TSUNAMI VOLLEYBALL', 'Tsunami');
   newTeamName = newTeamName.replace('ALEX', 'Alex');
   newTeamName = newTeamName.replace('DUN', 'Dun');
   newTeamName = newTeamName.replace('GROOMS', 'Grooms');
   newTeamName = newTeamName.replace('HOWARD', 'Howard');
   newTeamName = newTeamName.replace('JEFF', 'Jeff');
   newTeamName = newTeamName.replace('JOE', 'Joe');
   newTeamName = newTeamName.replace('JOHN', 'John');
   newTeamName = newTeamName.replace('KEALY', 'Kealy');
   newTeamName = newTeamName.replace('KYLE', 'Kyle');
   }

   if (newTeamName.indexOf('TUVA') === 0) {
   newTeamName = newTeamName.replace('TUVA', 'Tampa United');
   }

   if (newTeamName.indexOf('Tx Fusion') === 0) {
   newTeamName = newTeamName.replace('Tx Fusion', 'Texas Fusion');
   }

   if (newTeamName.indexOf('TX Tornados') === 0) {
   newTeamName = newTeamName.replace('TX Tornados', 'Texas Tornados');
   }

   if (newTeamName.indexOf('Ultimate VBC') === 0) {
   newTeamName = newTeamName.replace(' VBC -', '');
   }

   if (newTeamName.indexOf('UNITED') === 0) {
   newTeamName = newTeamName.replace('UNITED', 'United');
   }

   if (newTeamName.indexOf('V1 Academy') === 0) {
   newTeamName = newTeamName.replace(' Nat ', ' National ');
   }

   if (newTeamName.indexOf('V-1 Academy') === 0) {
   newTeamName = newTeamName.replace(' ATH ', ' Athens ');
   newTeamName = newTeamName.replace(' Kenn ', ' Kennesaw ');
   newTeamName = newTeamName.replace(' PTC ', ' Peachtree City ');
   }

   if (newTeamName.indexOf('VAQUERAS') > 0) {
   newTeamName = newTeamName.replace('VAQUERAS', 'Vaqueras');
   newTeamName = newTeamName.replace('MILTON', 'Milton');
   }

   if (newTeamName.indexOf('VIA') === 0) {
   newTeamName = newTeamName.replace('VIA', 'Louisiana VIA');
   }

   if (newTeamName.indexOf('VM') === 0) {
   newTeamName = newTeamName.replace('VM', 'Voleimiami');
   newTeamName = newTeamName.replace('ORANGE', 'Orange');
   newTeamName = newTeamName.replace('GREEN', 'Green');
   newTeamName = newTeamName.replace('ASICS', 'Asics');
   }

   if (newTeamName.indexOf('Volley One') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Academy', '');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   newTeamName = newTeamName.replace(' VBC ', ' ');
   }

   if (newTeamName.indexOf('West FL') === 0) {
   newTeamName = newTeamName.replace('West FL', 'West Florida');
   }

   if (newTeamName.indexOf('West Georgia') === 0) {
   newTeamName = newTeamName.replace(' Volleyball Academ', '');
   newTeamName = newTeamName.replace(' WGVA13 Rox', '');
   newTeamName = newTeamName.replace(' WGVA132', '');
   newTeamName = newTeamName.replace(' WGVA15 Rox', '');
   newTeamName = newTeamName.replace(' WGVA 152', '');
   newTeamName = newTeamName.replace(' WGVA 153', '');
   newTeamName = newTeamName.replace(' WGVA16 Rox', '');
   newTeamName = newTeamName.replace(' WGVA162', '');
   newTeamName = newTeamName.replace(' WGVA17 Rox', '');
   newTeamName = newTeamName.replace(' WGVA172', '');
   newTeamName = newTeamName.replace(' WGVA18 Rox', '');
   }

   if (newTeamName.indexOf('WGVA') === 0) {
   newTeamName = newTeamName.replace('WGVA', 'West Georgia');
   }

   if (newTeamName.indexOf('WKVC') === 0) {
   newTeamName = newTeamName.replace('WKVC', 'West Kentucky');
   }

   if (newTeamName.indexOf('WVA ') === 0) {
   newTeamName = newTeamName.replace('WVA ', 'Wisconsin Volleyball Academy ');
   }

   if (newTeamName.indexOf('WBVA ') === 0) {
   newTeamName = newTeamName.replace('WVBA ', 'Washington Volleyball Academy ');
   }
   */

}

module.exports = function fixClubName(teamName, eventType) {
  let newTeamName = teamName;

  if (eventType === 'aau') {
    newTeamName = fixAAUNames(teamName);
  }
  else if ((eventType === 'usav') || (eventType === 'boys')) {
    newTeamName = fixUSAVNames(teamName);
  }

  if (newTeamName.indexOf(' GOLD') > 0) {
    newTeamName = newTeamName.replace(' GOLD', ' Gold');
  }

  if (newTeamName.indexOf(' ROX') > 0) {
    newTeamName = newTeamName.replace(' ROX', ' Rox');
  }

  if (newTeamName.indexOf(' Jrs.') > 0) {
    newTeamName = newTeamName.replace(' Jrs.', ' Juniors');
  }

  if (newTeamName.indexOf(' Jrs') > 0) {
    newTeamName = newTeamName.replace(' Jrs', ' Juniors');
  }

  if (newTeamName.indexOf('Nat\'l') > 0) {
    newTeamName = newTeamName.replace('Nat\'l', 'National');
  }

  if ((newTeamName.indexOf('GA5') === 0) || (newTeamName.indexOf('A5 Mizuno') === 0)) {
    newTeamName = fixTeamName(newTeamName);
  }

  newTeamName = newTeamName.replace(' F1', ' 1');
  newTeamName = newTeamName.replace(' M1', ' 1');

  return newTeamName;
};
