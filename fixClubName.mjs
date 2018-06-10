import fixTeamName from './fixTeamName';

function fixAAUNames(teamName) {
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

  if (newTeamName.startsWith('Academy 13 AAU')) {
    newTeamName = newTeamName.replace('Academy ', 'North Carolina Volleyball Academy ');
  }

  if (newTeamName.startsWith('ACV')) {
    newTeamName = newTeamName.replace('ACV', 'Angels Country');
  }

  if (newTeamName.startsWith('AJV ')) {
    newTeamName = newTeamName.replace('AJV ', 'Austin Juniors ');
    newTeamName = newTeamName.replace('MIZUNO ', 'Mizuno');
    newTeamName = newTeamName.replace('CEDAR PARK', 'Cedar Park');
    newTeamName = newTeamName.replace('NAVY', 'Navy');
  }

  if (newTeamName.startsWith('AP ')) {
    newTeamName = newTeamName.replace('AP ', 'Austin Performance ');
  }

  if (newTeamName.startsWith('AVA -')) {
    newTeamName = newTeamName.replace('AVA -', 'Arsenal');
  }

  if (newTeamName.startsWith('AZ Des Sky')) {
    newTeamName = newTeamName.replace('AZ Des Sky', 'Arizona Desert Sky');
  }

  if (newTeamName.startsWith('BORINQUEN')) {
    newTeamName = newTeamName.replace('BORINQUEN COQUI', 'Borinquen Coqui');
    newTeamName = newTeamName.replace('COLIN', 'Colin');
  }

  if (newTeamName.startsWith('CAPITAL CITY')) {
    newTeamName = newTeamName.replace('CAPITAL CITY JUNIORS', 'Capital City Juniors');
  }

  if (newTeamName.startsWith('Carolina UVC')) {
    newTeamName = newTeamName.replace('Carolina UVC', 'Carolina Union');
  }

  if (newTeamName.startsWith('Chas ')) {
    newTeamName = newTeamName.replace('Chas ', 'Charleston ');
  }

  if (newTeamName.startsWith('Choo Choo ')) {
    newTeamName = newTeamName.replace('VBC ', '');
  }

  if (newTeamName.startsWith('CJV')) {
    newTeamName = newTeamName.replace('CJV', 'Carolina Juniors');
  }

  if (newTeamName.startsWith('Club Fusion')) {
    newTeamName = newTeamName.replace('Black', ' Black');
    newTeamName = newTeamName.replace('Blue', ' Blue');
    newTeamName = newTeamName.replace('Cardinal', ' Cardinal');
    newTeamName = newTeamName.replace('Crimson', ' Crimson');
    newTeamName = newTeamName.replace('Red', ' Red');
    newTeamName = newTeamName.replace('Silver', ' Silver');
    newTeamName = newTeamName.replace('White', ' White');
  }

  if (newTeamName.startsWith('Club Savannah')) {
    newTeamName = newTeamName.replace('premier', ' Premier');
  }

  if (newTeamName.startsWith('CNVBC')) {
    newTeamName = newTeamName.replace('CNVBC', 'Columbus North');
  }

  if (newTeamName.startsWith('EC Power')) {
    newTeamName = newTeamName.replace('EC Power', 'East Coast Power');
  }

  if (newTeamName.startsWith('ECJ ')) {
    newTeamName = newTeamName.replace('ECJ ', 'Eastside Cleveland ');
  }

  if (newTeamName.startsWith('ECJVC')) {
    newTeamName = newTeamName.replace('ECJVC', 'East Carolina');
  }

  if (newTeamName.startsWith('ECVBA')) {
    newTeamName = newTeamName.replace('ECVBA', 'East County');
    newTeamName = newTeamName.replace('CARLOS', 'Carlos');
  }

  if (newTeamName.startsWith('EliteVBTC')) {
    newTeamName = newTeamName.replace('EliteVBTC', 'Elite VBTC');
  }

  if (newTeamName.startsWith('Extreme Jr VBC')) {
    newTeamName = newTeamName.replace('Extreme Jr VBC', 'Extreme Juniors');
  }

  if (newTeamName.startsWith('GBV')) {
    newTeamName = newTeamName.replace('GBV', 'Gainesville Beach');
  }

  if (newTeamName.startsWith('GIOCCO TECH')) {
    newTeamName = newTeamName.replace('GIOCCO TECH', 'Giocco Tech');
    newTeamName = newTeamName.replace('SUB', 'Sub');
  }

  if (newTeamName.startsWith('GSJ ')) {
    newTeamName = newTeamName.replace('GSJ ', 'Grand Strand ');
  }

  if (newTeamName.startsWith('GVA')) {
    newTeamName = newTeamName.replace('GVA/', 'GVA ');
    newTeamName = newTeamName.replace('MIZUNO', 'Mizuno');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
    newTeamName = newTeamName.replace('TEAL', 'Teal');
  }

  if (newTeamName.startsWith('Guaynabo City')) {
    newTeamName = newTeamName.replace('mets', 'Mets');
  }

  if (newTeamName.startsWith('HIGH VOLTAGE')) {
    newTeamName = newTeamName.replace('HIGH VOLTAGE', 'High Voltage');
    newTeamName = newTeamName.replace('LightningBolt', 'Lightning Bolt');
  }

  if (newTeamName.startsWith('HOTSHOTS')) {
    newTeamName = newTeamName.replace('HOTSHOTS', 'Hot Shots');
  }

  if (newTeamName.startsWith('HV Adidas')) {
    newTeamName = newTeamName.replace('HV Adidas', 'Huron Valley Adidas');
  }

  if (newTeamName.startsWith('KMVA')) {
    newTeamName = newTeamName.replace('navy', ' Navy');
  }

  if (newTeamName.startsWith('LanikaiAthleticClub')) {
    newTeamName = newTeamName.replace('LanikaiAthleticClub', 'Lanikai');
    newTeamName = newTeamName.replace('14Blk', '14 Black');
  }

  if (newTeamName.startsWith('LBVBC')) {
    newTeamName = newTeamName.replace('LBVBC', 'Laguna Beach');
    newTeamName = newTeamName.replace('17Kevin', '17 Kevin');
  }

  if (newTeamName.startsWith('LEGACY ')) {
    newTeamName = newTeamName.replace('LEGACY ', 'Legacy ');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.startsWith('Lions ')) {
    newTeamName = newTeamName.replace('Lions ', '1st Alliance Lions ');
    newTeamName = newTeamName.replace('Red', ' Red');
    newTeamName = newTeamName.replace('Blue', ' Blue');
    newTeamName = newTeamName.replace('Navy', ' Navy');
    newTeamName = newTeamName.replace('Teal', ' Teal');
    newTeamName = newTeamName.replace('Silver', ' Silver');
  }

  if (newTeamName.startsWith('LVA')) {
    newTeamName = newTeamName.replace('LVA', 'Lightning Volleyball Academy');
  }

  if (newTeamName.startsWith('MEVBA')) {
    newTeamName = newTeamName.replace('MEVBA', 'Michigan Elite');
  }

  if (newTeamName.startsWith('MIAMI SELECT')) {
    newTeamName = newTeamName.replace('MIAMI SELECT ', 'Miami Select ');
    newTeamName = newTeamName.replace(' BLACK', ' Black');
    newTeamName = newTeamName.replace(' BOYS', ' Boys');
  }

  if (newTeamName.startsWith('MIAMI XTREME')) {
    newTeamName = newTeamName.replace('MIAMI XTREME VOLLEYBALL', 'Miami Xtreme');
  }

  if (newTeamName.startsWith('Mizuno Northern Lights')) {
    newTeamName = newTeamName.replace('Mizuno Northern Lights', 'Northern Lights');
  }

  if (newTeamName.startsWith('Mizuno Sports Performance')) {
    newTeamName = newTeamName.replace('Mizuno Sports Performance', 'Sports Performance');
  }

  if (newTeamName.startsWith('Mizuno WI')) {
    newTeamName = newTeamName.replace('Mizuno WI', 'Wisconsin');
  }

  if (newTeamName.startsWith('MN North')) {
    newTeamName = newTeamName.replace('MN', 'Minnesota');
  }

  if (newTeamName.startsWith('MN Select')) {
    newTeamName = newTeamName.replace('MN', 'Minnesota');
  }

  if (newTeamName.startsWith('Neb Jrs')) {
    newTeamName = newTeamName.replace('Neb Jrs', 'Nebraska Juniors');
  }

  if (newTeamName.startsWith('OVC Rampage')) {
    newTeamName = newTeamName.replace('OVC', 'Owensboro');
  }

  if (newTeamName.startsWith('PIEDMONT VBC')) {
    newTeamName = newTeamName.replace('PIEDMONT VBC', 'Piedmont');
    newTeamName = newTeamName.replace('VEDAT', 'Vedat');
    newTeamName = newTeamName.replace('BLAINE', 'Blaine');
    newTeamName = newTeamName.replace('KELLIE', 'Kellie');
    newTeamName = newTeamName.replace('KERRY', 'Kerry');
  }

  if (newTeamName.startsWith('PSVA')) {
    newTeamName = newTeamName.replace('PSVA', 'Prostyle');
  }

  if (newTeamName.startsWith('ProLink')) {
    newTeamName = newTeamName.replace('Nat', ' National');
  }

  if (newTeamName.startsWith('Protege')) {
    newTeamName = newTeamName.replace('16Kim', '16 Kim');
  }

  if (newTeamName.startsWith('PVC ')) {
    newTeamName = newTeamName.replace('PVC ', 'Powers ');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('PINK', 'Pink');
  }

  if (newTeamName.startsWith('QUEENS')) {
    newTeamName = newTeamName.replace('QUEENS', ' Queens');
  }

  if (newTeamName.startsWith('RCVC')) {
    newTeamName = newTeamName.replace('RCVC', 'Rocket City');
  }

  if (newTeamName.startsWith('Replay SELECT')) {
    newTeamName = newTeamName.replace('SELECT', 'Select');
    newTeamName = newTeamName.replace('NAT', 'National');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.startsWith('RVC ')) {
    newTeamName = newTeamName.replace('RVC ', 'Richmond ');
  }

  if (newTeamName.startsWith('RVCH ')) {
    newTeamName = newTeamName.replace('RVCH ', 'Rainbows ');
  }

  if (newTeamName.startsWith('-GRIND') > 0) {
    newTeamName = newTeamName.replace('RVC ', 'Relentless ');
    newTeamName = newTeamName.replace('GRIND', 'Grind');
  }

  if (newTeamName.startsWith('SA Kryptonite')) {
    newTeamName = newTeamName.replace('SA Kryptonite', 'San Antonio Kryptonite');
  }

  if (newTeamName.startsWith('SCVC')) {
    newTeamName = newTeamName.replace('Roxy', ' Roxy');
  }

  if (newTeamName.startsWith('SDVBC')) {
    newTeamName = newTeamName.replace('SDVBC', 'San Diego');
  }

  if (newTeamName.startsWith('ShamRo15\'s')) {
    newTeamName = newTeamName.replace('ShamRo15\'s', 'ShamRocks 15\'s');
  }

  if (newTeamName.startsWith('SynergyForce')) {
    newTeamName = newTeamName.replace('SynergyForce', 'Synergy Force');
  }

  if (newTeamName.startsWith('SVVC')) {
    newTeamName = newTeamName.replace('SVVC', 'Snohomish Valley');
  }

  if (newTeamName.startsWith('TALONS')) {
    newTeamName = newTeamName.replace('TALONS', 'Talons');
  }

  if (newTeamName.startsWith('Tianas')) {
    newTeamName = newTeamName.replace('VC ', '');
  }

  if (newTeamName.startsWith('TIV')) {
    newTeamName = newTeamName.replace('TIV', 'Texas Image');
  }

  if (newTeamName.startsWith('ToledoSTORM')) {
    newTeamName = newTeamName.replace('ToledoSTORM', 'Toledo Storm');
  }

  if (newTeamName.startsWith('TOP SELECT')) {
    newTeamName = newTeamName.replace('TOP SELECT', 'Top Select');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('AMANDA', 'Amanda');
    newTeamName = newTeamName.replace('BLAKE', 'Blake');
  }

  if (newTeamName.startsWith('Turistas ')) {
    newTeamName = newTeamName.replace('ADVITL', 'Advitl');
  }

  if (newTeamName.startsWith('TVA ')) {
    newTeamName = newTeamName.replace('SYSTEM', 'System');
    newTeamName = newTeamName.replace('MAGDIEL', 'Magdiel');
  }

  if (newTeamName.startsWith('TX Eclipse')) {
    newTeamName = newTeamName.replace('TX Eclipse', 'Texas Eclipse');
  }

  if (newTeamName.startsWith('UNION')) {
    newTeamName = newTeamName.replace('UNION', 'Union');
    newTeamName = newTeamName.replace('IN', 'Indiana');
    newTeamName = newTeamName.replace('KY', 'Kentucky');
  }

  if (newTeamName.startsWith('USA SOUTH')) {
    newTeamName = newTeamName.replace('SOUTH', 'South');
    newTeamName = newTeamName.replace('PREMIER', 'Premier');
    newTeamName = newTeamName.replace('PURPLE', 'Purple');
  }

  if (newTeamName.startsWith('UVA ')) {
    newTeamName = newTeamName.replace('UVA', 'Upontop');
    newTeamName = newTeamName.replace('\'S', '\'s');
    newTeamName = newTeamName.replace('NATIONAL', 'National');
    newTeamName = newTeamName.replace('SHOWCASE', 'Showcase');
    newTeamName = newTeamName.replace('NICK', 'Nick');
  }

  if (newTeamName.startsWith('vaqueras')) {
    newTeamName = newTeamName.replace('vaqueras', 'Vaqueras');
    newTeamName = newTeamName.replace('14-2 danny', ' 14-2 Danny');
  }

  if (newTeamName.startsWith('VCVC')) {
    newTeamName = newTeamName.replace('VCVC', 'Ventura County');
  }

  if (newTeamName.startsWith('VOLLEY TOP')) {
    newTeamName = newTeamName.replace('VOLLEY TOP', 'Volley Top');
    newTeamName = newTeamName.replace('WES', 'Wes');
  }

  if (newTeamName.startsWith('VOLYCAY CAYEY')) {
    newTeamName = newTeamName.replace('VOLYCAY CAYEY', ' Volycay Cayey');
  }

  if (newTeamName.startsWith('VVC')) {
    newTeamName = newTeamName.replace('VVC', 'Vital');
  }

  if (newTeamName.startsWith('WEST')) {
    newTeamName = newTeamName.replace('WEST', 'West');
    newTeamName = newTeamName.replace('Elite', ' Elite');
  }

  if (newTeamName.startsWith('WPVC')) {
    newTeamName = newTeamName.replace('WPVC', 'Winter Park');
  }

  return newTeamName;
}

function fixUSAVNames(teamName) {
  let newTeamName = teamName;

  if (newTeamName.startsWith('AJV')) {
    newTeamName = newTeamName.replace('AJV', 'Austin Juniors');
  }

  if (newTeamName.startsWith('Alliance ')) {
    newTeamName = newTeamName.replace('MIZUNO', 'Mizuno');
  }

  if (newTeamName.startsWith('ARIZONA STORM')) {
    newTeamName = newTeamName.replace('ARIZONA STORM', 'Arizona Storm');
    newTeamName = newTeamName.replace('THUNDER', 'Thunder');
  }

  if (newTeamName.startsWith('ASICS MAVS')) {
    newTeamName = newTeamName.replace('ASICS ', '');
  }

  if (newTeamName.startsWith('AsicsWillowbrook')) {
    newTeamName = newTeamName.replace('AsicsWillowbrook', 'Willowbrook ');
    newTeamName = newTeamName.replace('12Gold', '12 Gold');
    newTeamName = newTeamName.replace('16Gold', '16 Gold');
  }

  if (newTeamName.startsWith('ASPIRE')) {
    newTeamName = newTeamName.replace('ASPIRE', 'Aspire');
  }

  if (newTeamName.startsWith('AVA TX')) {
    newTeamName = newTeamName.replace('AVA TX', 'AVA Texas');
  }

  if (newTeamName.startsWith('AVC Clev')) {
    newTeamName = newTeamName.replace('AVC Clev', 'AVC Cleveland');
  }

  if (newTeamName.startsWith('AZ EVJ')) {
    newTeamName = newTeamName.replace('AZ EVJ', 'Arizona East Valley');
  }

  if (newTeamName.startsWith('AZ REV')) {
    newTeamName = newTeamName.replace('AZ REV', 'Arizona Revolution');
  }

  if (newTeamName.startsWith('AZ Sky')) {
    newTeamName = newTeamName.replace('AZ Sky', 'Arizona Sky');
  }

  if (newTeamName.startsWith('AZ SKY')) {
    newTeamName = newTeamName.replace('AZ SKY', 'Arizona Sky');
  }

  if (newTeamName.startsWith('Balboa Bay')) {
    newTeamName = newTeamName.replace('14Blue', '14 Blue');
  }

  if (newTeamName.startsWith('BEACH ELITE')) {
    newTeamName = newTeamName.replace('BEACH ELITE', 'Beach Elite');
    newTeamName = newTeamName.replace('ADIDAS', 'Adidas');
  }

  if (newTeamName.startsWith('Brandywine')) {
    newTeamName = newTeamName.replace('BAM', 'Bam');
  }

  if (newTeamName.startsWith('BRAVO')) {
    newTeamName = newTeamName.replace('BRAVO', 'Bravo');
  }

  if (newTeamName.startsWith('CIA')) {
    newTeamName = newTeamName.replace('CIA', 'Club Iowa');
  }

  if (newTeamName.startsWith('CinciVB')) {
    newTeamName = newTeamName.replace('CinciVB Acad', ' Cincinnati Volleyball Academy');
  }

  if (newTeamName.startsWith('CIS')) {
    newTeamName = newTeamName.replace('CIS', 'Central Iowa Select');
  }

  if (newTeamName.startsWith('CJV')) {
    newTeamName = newTeamName.replace('CJV', 'Carolina Juniors');
    newTeamName = newTeamName.replace(' - ', '-');
  }

  if (newTeamName.startsWith('CKVA')) {
    newTeamName = newTeamName.replace('CKVA', 'Central Kentucky');
  }

  if (newTeamName.startsWith('Club One AZ')) {
    newTeamName = newTeamName.replace('AZ', 'Arizona');
    newTeamName = newTeamName.replace('18Platinum', '18 Platinum');
    newTeamName = newTeamName.replace('17Platinum', '17 Platinum');
    newTeamName = newTeamName.replace('16Platinum', '16 Platinum');
    newTeamName = newTeamName.replace('15Platinum', '15 Platinum');
  }

  if (newTeamName.startsWith('COAST')) {
    newTeamName = newTeamName.replace('COAST', 'Coast');
  }

  if (newTeamName.startsWith('CoJrs')) {
    newTeamName = newTeamName.replace('CoJrs/Kaepa', 'Colorado Juniors');
    newTeamName = newTeamName.replace('17Peer', '17 Peer');
    newTeamName = newTeamName.replace('15Shannon', '15 Shannon');
    newTeamName = newTeamName.replace('14Matt', '14 Matt');
  }

  if (newTeamName.startsWith('CVC')) {
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.startsWith('DYNASTY')) {
    newTeamName = newTeamName.replace('DYNASTY', 'Dynasty');
  }

  if (newTeamName.startsWith('ECJ ')) {
    newTeamName = newTeamName.replace('ECJ ', 'Eastside Cleveland ');
  }

  if (newTeamName.startsWith('EC Power')) {
    newTeamName = newTeamName.replace('EC Power', 'East Cost Power');
  }

  if (newTeamName.startsWith('Edge VBC')) {
    newTeamName = newTeamName.replace(' VBC', '');
  }

  if (newTeamName.startsWith('EP Diggers')) {
    newTeamName = newTeamName.replace('EP Diggers', 'El Paso Diggers');
    newTeamName = newTeamName.replace('13Lutich', '13 Lutich');
    newTeamName = newTeamName.replace('12Hill', '12 Hill');
  }

  if (newTeamName.startsWith('FORZA')) {
    newTeamName = newTeamName.replace('FORZA', 'Forza');
    newTeamName = newTeamName.replace('NORTH', 'North');
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.startsWith('FRVBC')) {
    newTeamName = newTeamName.replace('FRVBC', 'Front Range');
  }

  if (newTeamName.startsWith('FSJ')) {
    newTeamName = newTeamName.replace('FSJ', 'Fort Smith');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('DEWEY', 'Dewey');
    newTeamName = newTeamName.replace('WAACK', 'Waack');
    newTeamName = newTeamName.replace('SARGENT', 'Sargent');
    newTeamName = newTeamName.replace('NEELEY.S', 'Neeley.S');
    newTeamName = newTeamName.replace('NEVILLS', 'Nevills');
  }

  if (newTeamName.startsWith('GCVA')) {
    newTeamName = newTeamName.replace('GCVA', 'Gulf Coast');
  }

  if (newTeamName.startsWith('HIC')) {
    newTeamName = newTeamName.replace('HIC', 'High Country');
  }

  if (newTeamName.startsWith('HJV')) {
    newTeamName = newTeamName.replace('HJV', 'Houston Juniors');
  }

  if (newTeamName.startsWith('H Skyline')) {
    newTeamName = newTeamName.replace('H Skyline', 'Houston Skyline');
    // newTeamName = newTeamName.replace('RSB', 'RoShamBo');
  }

  if (newTeamName.startsWith('IGNITE')) {
    newTeamName = newTeamName.replace('IGNITE', 'Ignite');
  }

  if (newTeamName.startsWith('Instinct')) {
    newTeamName = newTeamName.replace('Instinct16', 'Instinct 16');
    newTeamName = newTeamName.replace('WTigers Wild G', 'White Tigers Wild Gold');
  }

  if (newTeamName.startsWith('IPVA')) {
    newTeamName = newTeamName.replace('IPVA', 'Iowa Power');
  }

  if (newTeamName.startsWith('JJVA')) {
    // newTeamName = newTeamName.replace('JJVA', 'Jacksonville Juniors');
    newTeamName = newTeamName.replace('TEAM', 'Team');
  }

  if (newTeamName.startsWith('KC POWER')) {
    newTeamName = newTeamName.replace('KC POWER', 'KC Power');
  }

  if (newTeamName.startsWith('KU`IKAHI')) {
    newTeamName = newTeamName.replace('KU`IKAHI', 'Ku`ikahi');
  }

  if (newTeamName.startsWith('LIVEWIRE')) {
    newTeamName = newTeamName.replace('LIVEWIRE', 'Livewire');
  }

  if (newTeamName.startsWith('LoneStar')) {
    newTeamName = newTeamName.replace('LoneStar', 'Lone Star');
  }

  if (newTeamName.startsWith('MADFROG')) {
    newTeamName = newTeamName.replace('MADFROG', 'Madfrog');
    newTeamName = newTeamName.replace('BLACK', 'Black');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('BOYS', 'Boys');
    newTeamName = newTeamName.replace('\'S', '\'s');
  }

  if (newTeamName.startsWith('MEVBA')) {
    newTeamName = newTeamName.replace('MEVBA', 'Michigan Elite');
  }

  if (newTeamName.startsWith('Michio Chicago')) {
    newTeamName = newTeamName.replace('12Natl', '12 National');
  }

  if (newTeamName.startsWith('Miz LB')) {
    newTeamName = newTeamName.replace('Miz LB', 'Long Beach');
  }

  if (newTeamName.startsWith('MJVA')) {
    newTeamName = newTeamName.replace('MJVA', 'Memphis Juniors');
  }

  if (newTeamName.startsWith('MVA ')) {
    newTeamName = newTeamName.replace('ELITE', 'Elite');
  }

  if (newTeamName.startsWith('MVVC')) {
    newTeamName = newTeamName.replace('MVVC', 'Mountain View');
  }

  if (newTeamName.startsWith('Nebraska ONE')) {
    newTeamName = newTeamName.replace('ONE', 'One');
  }

  if (newTeamName.startsWith('NIVA')) {
    newTeamName = newTeamName.replace('VOLT', 'Volt');
  }

  if (newTeamName.startsWith('NKYVC')) {
    newTeamName = newTeamName.replace('NKYVC', 'Northern Kentucky');
  }

  if (newTeamName.startsWith('NPJ')) {
    newTeamName = newTeamName.replace('NPJ', 'North Pacific Juniors');
  }

  if (newTeamName.startsWith('Ocean Breeze')) {
    newTeamName = newTeamName.replace('Quiksilver', ' Quiksilver');
  }

  if (newTeamName.startsWith('OCVC')) {
    newTeamName = newTeamName.replace('OCVC', 'Orange Coast');
  }

  if (newTeamName.startsWith('OJVA')) {
    newTeamName = newTeamName.replace('OJVA', 'Oregon Juniors');
  }

  if (newTeamName.startsWith('Performance')) {
    newTeamName = newTeamName.replace('NIKE', 'Nike');
  }

  if (newTeamName.startsWith('Pgh Elite')) {
    newTeamName = newTeamName.replace('Pgh ', 'Pittsburgh ');
  }

  if (newTeamName.startsWith('Prime')) {
    newTeamName = newTeamName.replace('ASICS', 'Asics');
  }

  if (newTeamName.startsWith('PSVA')) {
    newTeamName = newTeamName.replace('PSVA', 'Prostyle');
  }

  if (newTeamName.startsWith('PSVBA')) {
    newTeamName = newTeamName.replace('PSVBA', 'Puget Sound');
  }

  if (newTeamName.startsWith('PVC ')) {
    newTeamName = newTeamName.replace('PVC ', 'Powers ');
  }

  if (newTeamName.startsWith('Rancho Valley')) {
    newTeamName = newTeamName.replace('17Select', '17 Select');
    newTeamName = newTeamName.replace('16Premier', '16 Premier');
  }

  if (newTeamName.startsWith('Roch ')) {
    newTeamName = newTeamName.replace('Roch PaceBootleggr', 'Rochester Pace Bootlegger ');
  }

  if (newTeamName.startsWith('SA STING')) {
    newTeamName = newTeamName.replace('SA STING', 'San Antonio Sting');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.startsWith('SASVBC')) {
    newTeamName = newTeamName.replace('SASVBC', 'Spike and Serve');
    newTeamName = newTeamName.replace('RED', 'Red');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.startsWith('SEATTLE JRS')) {
    newTeamName = newTeamName.replace('SEATTLE JRS', 'Seattle Juniors');
  }

  if (newTeamName.startsWith('SF JRS')) {
    newTeamName = newTeamName.replace('SF JRS', 'San Francisco Juniors');
  }

  if (newTeamName.startsWith('SG Elite')) {
    newTeamName = newTeamName.replace('SG ', 'San Gabriel ');
    newTeamName = newTeamName.replace('13Elite', '13 Elite');
  }

  if (newTeamName.startsWith('SG ELITE')) {
    newTeamName = newTeamName.replace('SG ', 'San Gabriel ');
    newTeamName = newTeamName.replace('ELITE', 'Elite');
    newTeamName = newTeamName.replace('12Roshambo', '12 Roshambo');
    newTeamName = newTeamName.replace('16Roshambo', '16 Roshambo');
  }

  if (newTeamName.startsWith('SIVA')) {
    newTeamName = newTeamName.replace('SIVA', 'Skagit Island');
    newTeamName = newTeamName.replace('BLUE', 'Blue');
  }

  if (newTeamName.startsWith('SJVBC')) {
    newTeamName = newTeamName.replace('SJVBC', 'San Juan');
  }

  if (newTeamName.startsWith('SNVC')) {
    newTeamName = newTeamName.replace('SNVC', 'Summit Nitro');
  }

  if (newTeamName.startsWith('SoCal VBC')) {
    newTeamName = newTeamName.replace(' VBC', '');
  }

  if (newTeamName.startsWith('Spike and Serve')) {
    newTeamName = newTeamName.replace('BOYS', 'Boys');
  }

  if (newTeamName.startsWith('Springfield')) {
    newTeamName = newTeamName.replace('16Blue', '16 Blue');
  }

  if (newTeamName.startsWith('SPORTIME')) {
    newTeamName = newTeamName.replace('SPORTIME', 'Sportime');
    newTeamName = newTeamName.replace('GOLD', 'Gold');
  }

  if (newTeamName.startsWith('STC Stars')) {
    newTeamName = newTeamName.replace('STC', 'St. Charles');
  }

  if (newTeamName.startsWith('TCVA')) {
    newTeamName = newTeamName.replace('TCVA', 'TriCounty');
  }

  if (newTeamName.startsWith('TEXAS PISTOLS')) {
    newTeamName = newTeamName.replace('TEXAS PISTOLS', 'Texas Pistols');
    newTeamName = newTeamName.replace('BLACK', 'Black');
  }

  if (newTeamName.startsWith('TJVBC')) {
    newTeamName = newTeamName.replace('TJVBC', 'Tallahassee Juniors');
  }

  if (newTeamName.startsWith('TVC')) {
    newTeamName = newTeamName.replace('TVC', 'Toledo');
  }

  if (newTeamName.startsWith('TxPerformance')) {
    newTeamName = newTeamName.replace('TxPerformance', 'Texas Performance');
  }

  if (newTeamName.startsWith('UNION')) {
    newTeamName = newTeamName.replace('UNION', 'Union');
    newTeamName = newTeamName.replace('IN', 'Indiana');
    newTeamName = newTeamName.replace('KY', 'Kentucky');
  }

  if (newTeamName.startsWith('USA SOUTH')) {
    newTeamName = newTeamName.replace('SOUTH', 'South');
    newTeamName = newTeamName.replace('Purp', 'Purple');
  }

  if (newTeamName.startsWith('VA Juniors')) {
    newTeamName = newTeamName.replace('VA', 'Virginia');
  }

  if (newTeamName.startsWith('Victory')) {
    newTeamName = newTeamName.replace('Elite', ' Elite');
  }

  if (newTeamName.startsWith('WAVE ')) {
    newTeamName = newTeamName.replace('WAVE ', 'Wave ');
  }

  newTeamName = newTeamName.replace(/\(.+\)$/g, '');
  return newTeamName;

  /*
   if (newTeamName.indexOf('PM_')) {
   newTeamName = newTeamName.replace('PM_', '');
   }

   if ((newTeamName.indexOf('12- Jen')) || (newTeamName.indexOf('13- Laney')) || (newTeamName.indexOf('14- Allyson'))
   || (newTeamName.indexOf('15- Kody')) || (newTeamName.indexOf('16- Ben')) || (newTeamName.indexOf('16- Charis'))
   || (newTeamName.indexOf('17- Emily')) || (newTeamName.indexOf('18- Tori'))) {
   newTeamName = 'Gamecock ' + newTeamName.replace('- ', '-');
   }

   if ((newTeamName.indexOf('15-Ruffing')) || (newTeamName.indexOf('16-Atchison'))) {
   newTeamName = 'Blackswamp ' + newTeamName;
   }

   if (newTeamName.indexOf('16-HAM')) {
   newTeamName = 'Lanier 16-Ham';
   }

   if (newTeamName.indexOf('14-1')) {
   newTeamName = 'Aftershock 14-1';
   }

   if (newTeamName.indexOf('15-1')) {
   newTeamName = 'Aftershock 15-1';
   }

   if (newTeamName.indexOf('15 Colorado Challenge')) {
   newTeamName = 'White Tiger ' + newTeamName;
   }

   if (newTeamName.indexOf('16-1')) {
   newTeamName = 'Aftershock 16-1';
   }

   if (newTeamName.indexOf('17-1 Black')) {
   newTeamName = 'Aftershock 17-1 Black';
   }

   if (newTeamName.indexOf('17-2 Green')) {
   newTeamName = 'Aftershock 17-2 Green';
   }

   if (newTeamName.indexOf('18U A GOZAR')) {
   newTeamName = newTeamName.replace('GOZAR', 'Gozar');
   }

   if (newTeamName.indexOf('41 South')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('A5 South')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('A5 Mizuon')) {
   newTeamName = newTeamName.replace('Mizuon', 'Mizuno');
   }

   if (newTeamName.indexOf('AFTERSHOCK')) {
   newTeamName = newTeamName.replace('AFTERSHOCK', 'Aftershock');
   }

   if (newTeamName.indexOf('Alabama Elite')) {
   newTeamName = newTeamName.replace(' VB', '');
   }

   if (newTeamName.indexOf('Alabama Juniors')) {
   newTeamName = newTeamName.replace(' ALJRS 12-1', '');
   newTeamName = newTeamName.replace(' ALJRS 12-2', '');
   newTeamName = newTeamName.replace(' ALJRS 13-1', '');
   newTeamName = newTeamName.replace(' ALJRS 14-1', '');
   newTeamName = newTeamName.replace(' ALJRS 15-1', '');
   newTeamName = newTeamName.replace(' ALJRS 16-1', '');
   }

   if (newTeamName.indexOf('ALJRS')) {
   newTeamName = newTeamName.replace('ALJRS', 'Alabama Juniors');
   }

   if (newTeamName.indexOf('Alliance')) {
   newTeamName = newTeamName.replace('M\'boro', 'Murfreesboro');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Arsenal Volleyball Academy')) {
   newTeamName = newTeamName.replace(' - ', ' ');
   }

   if (newTeamName.indexOf('AT LBoom')) {
   newTeamName = newTeamName.replace('AT LBoom', 'Atlanta Boom');
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   }

   if (newTeamName.indexOf('ATL Boom')) {
   newTeamName = newTeamName.replace('ATL Boom', 'Atlanta Boom');
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   newTeamName = newTeamName.replace('15Diamond', '15 Diamond');
   newTeamName = newTeamName.replace('16Diamond', '16 Diamond');
   }

   if (newTeamName.indexOf('Atlanta Boom')) {
   newTeamName = newTeamName.replace('DiamondRox', 'Diamond Rox');
   }

   if (newTeamName.indexOf('Atlanta Extreme')) {
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('Austin Juniors')) {
   newTeamName = newTeamName.replace('NAVY', 'Navy');
   }

   if (newTeamName.indexOf('BCVC')) {
   newTeamName = newTeamName.replace('BCVC', 'Black Creek');
   }

   if (newTeamName.indexOf('Birmingham')) {
   newTeamName = newTeamName.replace('Birmingham Volleyball Club', 'BVC');
   }

   if (newTeamName.indexOf('Boise VBC')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('BRAVO')) {
   newTeamName = newTeamName.replace('BRAVO', 'Bravo ');
   }

   if (newTeamName.indexOf('BUEV')) {
   newTeamName = newTeamName.replace('BUEV', 'Bay United Elite');
   }

   if (newTeamName.indexOf('BVA')) {
   newTeamName = newTeamName.replace('BVA', 'Biltmore');
   newTeamName = newTeamName.replace('17E', '17 Elite');
   }

   if (newTeamName.indexOf('C1VB')) {
   newTeamName = newTeamName.replace('C1VB', 'Carolina One');
   newTeamName = newTeamName.replace('Blk Grvl', 'Black Greenville');
   newTeamName = newTeamName.replace('Power Grvl', 'Power Greenville');
   }

   if (newTeamName.indexOf('C2 Attack')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('C4')) {
   newTeamName = newTeamName.replace(' Explosive Volleyball Club', '');
   newTeamName = newTeamName.replace('NAVY', 'Navy');
   newTeamName = newTeamName.replace('SILVER', 'Silver');
   newTeamName = newTeamName.replace('C4 Navy', 'Navy');
   newTeamName = newTeamName.replace('C4 NAVY', 'Navy');
   newTeamName = newTeamName.replace('C4 SILVER', 'Silver');
   newTeamName = newTeamName.replace('C4 WHITE', 'White');
   }

   if (newTeamName.indexOf('Car. Islanders')) {
   newTeamName = newTeamName.replace('Car. Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Car Islanders')) {
   newTeamName = newTeamName.replace('Car Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Car .Islanders')) {
   newTeamName = newTeamName.replace('Car .Islanders', 'Carolina Islanders');
   }

   if (newTeamName.indexOf('Carolina One')) {
   newTeamName = newTeamName.replace('Pkns', 'Pickens');
   newTeamName = newTeamName.replace('Reg ', 'Regional');
   newTeamName = newTeamName.replace('Blk', 'Black');
   newTeamName = newTeamName.replace('Roy', 'Royal');
   newTeamName = newTeamName.replace('Grvl', 'Greenville');
   newTeamName = newTeamName.replace('Black Gr', 'Black Greenville');
   newTeamName = newTeamName.replace('Royal Gr', 'Royal Greenville');
   }

   if (newTeamName.indexOf('CCCVBC')) {
   newTeamName = newTeamName.replace('CCCVBC', 'Choo Choo City');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('CC Force')) {
   newTeamName = newTeamName.replace('CC Force', 'Corpus Christi Force');
   }

   if (newTeamName.indexOf('CCJ')) {
   newTeamName = newTeamName.replace('CCJ', 'Capital City Juniors');
   newTeamName = newTeamName.replace('(BLACK)', 'Black');
   }

   if (newTeamName.indexOf('Central Georgia')) {
   newTeamName = newTeamName.replace(' VB Association', '');
   }

   if (newTeamName.indexOf('Chicago Elite')) {
   newTeamName = newTeamName.replace(' - ', '-');
   }

   if (newTeamName.indexOf('Chicago Jrs')) {
   newTeamName = newTeamName.replace('Chicago Jrs', 'Chicago Juniors');
   }

   if (newTeamName.indexOf('Choo Choo')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('CFVC')) {
   newTeamName = newTeamName.replace('CFVC', 'Central Florida');
   newTeamName = newTeamName.replace('18RED', '18 Red');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('CGVA')) {
   newTeamName = newTeamName.replace('CGVA', 'Central Georgia ');
   }

   if (newTeamName.indexOf('Classic City')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Club Fusion')) {
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

   if (newTeamName.indexOf('CLUB ONE')) {
   newTeamName = newTeamName.replace('CLUB ONE', 'Club One');
   }

   if (newTeamName.indexOf('Coast')) {
   newTeamName = newTeamName.replace('MIZUNO', 'Mizuno');
   newTeamName = newTeamName.replace('North18', 'North 18');
   }

   if (newTeamName.indexOf('COLAVOL')) {
   newTeamName = newTeamName.replace('COLAVOL VBC', 'COLAVOL');
   }

   if (newTeamName.indexOf('Conway Jrs')) {
   newTeamName = newTeamName.replace('Jrs', 'Juniors');
   }

   if (newTeamName.indexOf('CR_Carolina UVC')) {
   newTeamName = newTeamName.replace('CR_Carolina UVC', 'Carolina Union');
   }

   if (newTeamName.indexOf('Crossfire')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Crossfire MN')) {
   newTeamName = newTeamName.replace('MN', 'Minnesota');
   }

   if (newTeamName.indexOf('CSVC')) {
   newTeamName = newTeamName.replace('CSVC', 'Carolina Select');
   }

   if (newTeamName.indexOf('CUVC')) {
   newTeamName = newTeamName.replace('CUVC', 'Carolina Union');
   }

   if ((newTeamName.indexOf('CVA')) && (newTeamName.indexOf('Colorado') < 0)) {
   newTeamName = newTeamName.replace('CVA', 'Columbus Volleyball Academy');
   }

   if (newTeamName.indexOf('Dynamite')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Eastside ClevelandVC')) {
   newTeamName = newTeamName.replace('ClevelandVC', 'Cleveland');
   }

   if (newTeamName.indexOf('The EDGE')) {
   newTeamName = newTeamName.replace('EDGE', 'Edge');
   }

   if (newTeamName.indexOf('Ellis Co')) {
   newTeamName = newTeamName.replace('Ellis Co', 'Ellis County');
   newTeamName = newTeamName.replace('Nat', 'National');
   }

   if (newTeamName.indexOf('ESVBC')) {
   newTeamName = newTeamName.replace('ESVBC', 'Eastside');
   }

   if (newTeamName.indexOf('Ethos')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Elevation')) {
   newTeamName = newTeamName.replace('LovMah', 'National 1');
   }

   if (newTeamName.indexOf('ESVC')) {
   newTeamName = newTeamName.replace('ESVC', 'Eastern Shore');
   }

   if (newTeamName.indexOf('EXCEL')) {
   newTeamName = newTeamName.replace('EXCEL', 'Excel');
   }

   if (newTeamName.indexOf('EXTREME MAVS')) {
   newTeamName = newTeamName.replace('EXTREME', 'Extreme');
   }

   if (newTeamName.indexOf('FDL Fusion')) {
   newTeamName = newTeamName.replace('FDL', 'Fond du Lac');
   }

   if (newTeamName.indexOf('Forza1')) {
   newTeamName = newTeamName.replace('ASICS', 'Asics');
   }

   if (newTeamName.indexOf('FPVA')) {
   newTeamName = newTeamName.replace('FPVA', 'Florida Premier');
   }

   if (newTeamName.indexOf('Frisco Flyers')) {
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Front Range')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('FSVBC')) {
   newTeamName = newTeamName.replace('FSVBC SUNS', 'Florida Suns');
   newTeamName = newTeamName.replace('Black', ' Black');
   }

   if (newTeamName.indexOf('FW ')) {
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

   if (newTeamName.indexOf('GEVA')) {
   newTeamName = newTeamName.replace('GEVA', 'Guaynabo Elite');
   newTeamName = newTeamName.replace('UNDER', 'Under');
   }

   if (newTeamName.indexOf('GJVC')) {
   newTeamName = newTeamName.replace('GJVC', 'Georgia Juniors');
   }

   if (newTeamName.indexOf('Guns Up')) {
   newTeamName = newTeamName.replace('VBC ', ' ');
   }

   if (newTeamName.indexOf('H2 STL')) {
   newTeamName = newTeamName.replace('UnderArmour', 'Under Armour');
   }

   if (newTeamName.indexOf('HPSTL')) {
   newTeamName = newTeamName.replace('HPSTL', 'High Performance St. Louis');
   }

   if (newTeamName.indexOf('Hurricane VBC')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('ICT MAVS')) {
   newTeamName = newTeamName.replace('ICT MAVS', 'ICT Mavs');
   }

   if (newTeamName.indexOf('IlliniElite16Cardinal')) {
   newTeamName = newTeamName.replace('IlliniElite16Cardinal', 'Illini Elite 16 Cardinal');
   }

   if (newTeamName.indexOf('IVC')) {
   newTeamName = newTeamName.replace('IVC -', 'Intensity');
   }

   if (newTeamName.indexOf('JVC')) {
   newTeamName = newTeamName.replace('JVC', 'Jupiter');
   }

   if (newTeamName.indexOf('K2 Volleyball')) {
   newTeamName = newTeamName.replace('K2 Volleyball', 'K2');
   }

   if (newTeamName.indexOf('Kaepa BL')) {
   newTeamName = newTeamName.replace('Kaepa BL', 'Kaepa Borderline');
   }

   if (newTeamName.indexOf('Knoxville')) {
   newTeamName = newTeamName.replace('RED', 'Red');
   newTeamName = newTeamName.replace('17Emilee', 'Emilee');
   }

   if (newTeamName.indexOf('KPVA')) {
   newTeamName = newTeamName.replace('ELITES', 'Elites');
   }

   if (newTeamName.indexOf('KVA')) {
   newTeamName = newTeamName.replace('14Carmen', '14 Carmen');
   newTeamName = newTeamName.replace('13White', '13 White');
   newTeamName = newTeamName.replace('12Joe', '12 Joe');
   }

   if (newTeamName.indexOf('KVC')) {
   newTeamName = newTeamName.replace('KVC', 'Kingsport');
   }

   if (newTeamName.indexOf('Lake VBC')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('Lanier')) {
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

   if (newTeamName.indexOf('LAV')) {
   newTeamName = newTeamName.replace('LAV', 'Lower Alabama');
   }

   if (newTeamName.indexOf('Lex United')) {
   newTeamName = newTeamName.replace('Lex United', 'Lexington United');
   }

   if (newTeamName.indexOf('liga voleibol bogota')) {
   newTeamName = newTeamName.replace('liga voleibol bogota', 'Liga Voleibol Bogota');
   }

   if (newTeamName.indexOf('Lions')) {
   newTeamName = newTeamName.replace('14Blue', '14 Blue');
   }

   if (newTeamName.indexOf('LVBR')) {
   newTeamName = newTeamName.replace('LVBR', 'Louisiana Baton Rouge');
   }

   if (newTeamName.indexOf('LVL')) {
   newTeamName = newTeamName.replace('LVL', 'Louisiana Lafayette');
   }

   if (newTeamName.indexOf('Madison')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('MADISON COUNTY')) {
   newTeamName = newTeamName.replace('MADISON COUNTY ACE', 'Madison County Ace');
   newTeamName = newTeamName.replace(' 141', '');
   }

   if (newTeamName.indexOf('matrix')) {
   newTeamName = newTeamName.replace('matrix', 'Matrix');
   }

   if (newTeamName.indexOf('MAVBC')) {
   newTeamName = newTeamName.replace('MAVBC', 'Metro American');
   }

   if (newTeamName.indexOf('MAVERICK')) {
   newTeamName = newTeamName.replace('MAVERICK', 'Maverick');
   }

   if (newTeamName.indexOf('Mem Metro')) {
   newTeamName = newTeamName.replace('Mem Metro', 'Memphis Metro');
   }

   if (newTeamName.indexOf('METRO VOLLEYBALL')) {
   newTeamName = newTeamName.replace('METRO VOLLEYBALL CLUB- ATL', 'Metro Atlanta');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('METRO-ATL')) {
   newTeamName = newTeamName.replace('METRO-ATL', 'Metro Atlanta');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('MEVC')) {
   newTeamName = newTeamName.replace('14Power', ' 14 Power');
   newTeamName = newTeamName.replace('17Power', ' 17 Power');
   newTeamName = newTeamName.replace('MEVC', 'Mountain Elite');
   }

   if (newTeamName.indexOf('MIDTN')) {
   newTeamName = newTeamName.replace('MIDTN', 'MidTN');
   newTeamName = newTeamName.replace('NORTH', 'North');
   }

   if (newTeamName.indexOf('Mid TN')) {
   newTeamName = newTeamName.replace('1 1', '1');
   }

   if (newTeamName.indexOf('Milw Sting')) {
   newTeamName = newTeamName.replace('Milw Sting', 'Milwaukee Sting');
   }

   if (newTeamName.indexOf('MMTSC')) {
   newTeamName = newTeamName.replace('MMTSC', 'Momentus');
   }

   if (newTeamName.indexOf('MSLCT')) {
   newTeamName = newTeamName.replace('MSLCT', 'Miami Select');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('MVA')) {
   newTeamName = newTeamName.replace('MVA', 'Miami Volleyball Academy');
   }

   if (newTeamName.indexOf('MVC')) {
   newTeamName = newTeamName.replace('MVC', 'Madison');
   }

   if (newTeamName.indexOf('N. Alabama')) {
   newTeamName = newTeamName.replace(' NACAV 142', '');
   }

   if (newTeamName.indexOf('N GA Aces')) {
   newTeamName = newTeamName.replace('N GA', 'North Georgia');
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('NAVC')) {
   newTeamName = newTeamName.replace('NAVC', 'North Atlanta');
   newTeamName = newTeamName.replace(' - ', '-');
   }

   if (newTeamName.indexOf('NBVBC')) {
   newTeamName = newTeamName.replace('NBVBC', 'Naletre Beach');
   }

   if (newTeamName.indexOf('NCVC')) {
   newTeamName = newTeamName.replace('NCVC', 'Northern California');
   }

   if (newTeamName.indexOf('Neb Impact')) {
   newTeamName = newTeamName.replace('Neb Impact', 'Nebraska Impact');
   }

   if (newTeamName.indexOf('NF PIRATES')) {
   newTeamName = newTeamName.replace('NF PIRATES', 'North Florida Pirates');
   newTeamName = newTeamName.replace('GOLD', 'Gold');
   }

   if (newTeamName.indexOf('Nfinity VBC')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('NGACE')) {
   newTeamName = newTeamName.replace('NGACE', 'North Georgia Aces ');
   }

   if (newTeamName.indexOf('NI Thunder')) {
   newTeamName = newTeamName.replace('NI Thunder', 'North Idaho Thunder');
   }

   if (newTeamName.indexOf('NM Jrs')) {
   newTeamName = newTeamName.replace('NM Jrs', 'New Mexico Juniors');
   }

   if (newTeamName.indexOf('NNJ')) {
   newTeamName = newTeamName.replace('NNJ', 'Northern Nevada');
   }

   if (newTeamName.indexOf('North Atlanta')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('OEV')) {
   newTeamName = newTeamName.replace('OEV', 'Oakland Elite');
   }

   if (newTeamName.indexOf('Ohana')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('OP2')) {
   newTeamName = newTeamName.replace('SMACK', 'Smack');
   }

   if (newTeamName.indexOf('OT ')) {
   newTeamName = newTeamName.replace('OT ', 'OVA/TBVA ');
   }

   if (newTeamName.indexOf('Pacific Jrs')) {
   newTeamName = newTeamName.replace('Jrs', 'Juniors');
   }

   if (newTeamName.indexOf('Pineapple')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('PITT PREMIER')) {
   newTeamName = newTeamName.replace('PITT PREMIER', 'Pittsburgh Premier');
   }

   if (newTeamName.indexOf('PLVC')) {
   newTeamName = newTeamName.replace('PLVC', 'Parkway Lightning');
   }

   if (newTeamName.indexOf('Play Like Winners')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('PoWer GB')) {
   newTeamName = newTeamName.replace('PoWer GB', 'PoWer Green Bay');
   }

   if (newTeamName.indexOf('PR_KY')) {
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

   if (newTeamName.indexOf('PR_MAVA')) {
   newTeamName = newTeamName.replace('PR_MAVA', 'MAVA');
   }

   if (newTeamName.indexOf('PSV')) {
   newTeamName = newTeamName.replace('PSV', 'Prostyle');
   }

   if (newTeamName.indexOf('Queens')) {
   newTeamName = newTeamName.replace('richard', 'Richard');
   }

   if (newTeamName.indexOf('R Thunder')) {
   newTeamName = newTeamName.replace('R Thunder', 'Rockwood Thunder');
   }

   if (newTeamName.indexOf('Rancho Valley')) {
   newTeamName = newTeamName.replace('14Premier', '14 Premier');
   }

   if (newTeamName.indexOf('Rocket City')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Rockwood Thunder')) {
   newTeamName = newTeamName.replace('Mizuno', ' Mizuno');
   }

   if (newTeamName.indexOf('ROX') > 0) {
   newTeamName = newTeamName.replace('ROX', 'Rox');
   }

   if (newTeamName.indexOf('RRVC') > 0) {
   newTeamName = newTeamName.replace('RRVC', 'Rox Rainbows');
   }

   if (newTeamName.indexOf('SA MAGIC')) {
   newTeamName = newTeamName.replace('SA MAGIC', 'San Antonio Magic');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('SBVC')) {
   newTeamName = newTeamName.replace('SBVC', 'Santa Barbara');
   }

   if (newTeamName.indexOf('SC Midlands')) {
   newTeamName = newTeamName.replace('Nat', 'National');
   }

   if (newTeamName.indexOf('SDVC')) {
   newTeamName = newTeamName.replace('SDVC', 'South Dade');
   }

   if (newTeamName.indexOf('SIVBC')) {
   newTeamName = newTeamName.replace('SIVBC', 'Sudden Impact');
   }

   if (newTeamName.indexOf('SLVVC')) {
   newTeamName = newTeamName.replace('SLVVC', 'St. Louis Vision');
   }

   if ((newTeamName.indexOf('South Perf')) || (newTeamName.indexOf('Southern Perf'))) {
   newTeamName = newTeamName.replace('Southern Perf', 'Southern Performance');
   newTeamName = newTeamName.replace('South Perf', 'Southern Performance');
   newTeamName = newTeamName.replace('NAT', 'National');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Southern Strikers')) {
   newTeamName = newTeamName.replace(' VBC', '');
   newTeamName = newTeamName.replace(' SSVBC 151', '');
   newTeamName = newTeamName.replace(' SSVBC 161', '');
   newTeamName = newTeamName.replace(' SSVBC 171', '');
   }

   if (newTeamName.indexOf('Southwest')) {
   newTeamName = newTeamName.replace('Southwest15', 'Southwest 15');
   newTeamName = newTeamName.replace('Southwest16', 'Southwest 16');
   newTeamName = newTeamName.replace('Southwest17', 'Southwest 17');
   newTeamName = newTeamName.replace('ROX', 'Rox');
   }

   if (newTeamName.indexOf('Spartan Volleyball')) {
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   }

   if (newTeamName.indexOf('Spiketown')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('SPIRIT')) {
   newTeamName = newTeamName.replace('SPIRIT', 'Spirit');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('SPVB')) {
   newTeamName = newTeamName.replace('SPVB', 'Sports Performance');
   }

   if (newTeamName.indexOf('SPVC')) {
   newTeamName = newTeamName.replace('SPVC', 'Sacramento Performance');
   }

   if (newTeamName.indexOf('SSVB')) {
   newTeamName = newTeamName.replace('SSVB', 'Southern Select');
   }

   if (newTeamName.indexOf('SSVC')) {
   newTeamName = newTeamName.replace('SSVC', 'Silver State');
   }

   if (newTeamName.indexOf('Supernova')) {
   newTeamName = newTeamName.replace('BLACK', 'Black');
   newTeamName = newTeamName.replace('GRAY', 'Gray');
   newTeamName = newTeamName.replace('RED', 'Red');
   }

   if (newTeamName.indexOf('Swarm')) {
   newTeamName = newTeamName.replace(' VBC', '');
   }

   if (newTeamName.indexOf('SWVBC')) {
   newTeamName = newTeamName.replace('SWVBC', 'Southwest Milwaukee');
   }

   if (newTeamName.indexOf('TAV')) {
   newTeamName = newTeamName.replace('TAV', 'Texas Advantage');
   }

   if (newTeamName.indexOf('TCV')) {
   newTeamName = newTeamName.replace('TCV', 'TriCounty');
   }

   if (newTeamName.indexOf('Team D ')) {
   newTeamName = newTeamName.replace('Team D ', 'Team Detroit ');
   }

   if (newTeamName.indexOf('Team Momentum')) {
   newTeamName = newTeamName.replace('15Navy', '15 Navy');
   }

   if (newTeamName.indexOf('TEXAS FURY')) {
   newTeamName = newTeamName.replace('TEXAS FURY', 'Texas Fury');
   }

   if (newTeamName.indexOf('TEXAS STARS')) {
   newTeamName = newTeamName.replace('TEXAS STARS-', 'Texas Stars');
   newTeamName = newTeamName.replace('BLACK', 'Black');
   }

   if (newTeamName.indexOf('THUNDER BAY')) {
   newTeamName = newTeamName.replace('THUNDER BAY', 'Thunder Bay');
   newTeamName = newTeamName.replace('ELITE', 'Elite');
   }

   if (newTeamName.indexOf('TI Elite')) {
   newTeamName = newTeamName.replace('TI Elite', 'Team Indiana Elite');
   }

   if (newTeamName.indexOf('TLVC')) {
   newTeamName = newTeamName.replace('TLVC', 'Team Life');
   }

   if (newTeamName.indexOf('TRIVOLLEY')) {
   newTeamName = newTeamName.replace('TRIVOLLEY', 'Trivolley');
   }

   if (newTeamName.indexOf('Tsunami DKB')) {
   newTeamName = newTeamName.replace('DKB', 'DeKalb');
   }

   if (newTeamName.indexOf('Tsunami Dekalb')) {
   newTeamName = newTeamName.replace('Dekalb', 'DeKalb');
   newTeamName = newTeamName.replace('BILL', 'Bill');
   newTeamName = newTeamName.replace('BRUCE', 'Bruce');
   newTeamName = newTeamName.replace('JAMES', 'James');
   newTeamName = newTeamName.replace('LIZ', 'Liz');
   newTeamName = newTeamName.replace('TED', 'Ted');
   newTeamName = newTeamName.replace('VICKI', 'Vicki');
   }

   if (newTeamName.indexOf('TSUNAMI ROME')) {
   newTeamName = newTeamName.replace('TSUNAMI ROME', 'Tsunami Rome');
   newTeamName = newTeamName.replace('MIKA', 'Mika');
   }

   if (newTeamName.indexOf('Tsunami Volleyball')) {
   newTeamName = newTeamName.replace(' Volleyball', '');
   }

   if (newTeamName.indexOf('TSUNAMI VOLLEYBALL')) {
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

   if (newTeamName.indexOf('TUVA')) {
   newTeamName = newTeamName.replace('TUVA', 'Tampa United');
   }

   if (newTeamName.indexOf('Tx Fusion')) {
   newTeamName = newTeamName.replace('Tx Fusion', 'Texas Fusion');
   }

   if (newTeamName.indexOf('TX Tornados')) {
   newTeamName = newTeamName.replace('TX Tornados', 'Texas Tornados');
   }

   if (newTeamName.indexOf('Ultimate VBC')) {
   newTeamName = newTeamName.replace(' VBC -', '');
   }

   if (newTeamName.indexOf('UNITED')) {
   newTeamName = newTeamName.replace('UNITED', 'United');
   }

   if (newTeamName.indexOf('V1 Academy')) {
   newTeamName = newTeamName.replace(' Nat ', ' National ');
   }

   if (newTeamName.indexOf('V-1 Academy')) {
   newTeamName = newTeamName.replace(' ATH ', ' Athens ');
   newTeamName = newTeamName.replace(' Kenn ', ' Kennesaw ');
   newTeamName = newTeamName.replace(' PTC ', ' Peachtree City ');
   }

   if (newTeamName.indexOf('VAQUERAS') > 0) {
   newTeamName = newTeamName.replace('VAQUERAS', 'Vaqueras');
   newTeamName = newTeamName.replace('MILTON', 'Milton');
   }

   if (newTeamName.startsWith('VIA')) {
   newTeamName = newTeamName.replace('VIA', 'Louisiana VIA');
   }

   if (newTeamName.startsWith('VM')) {
   newTeamName = newTeamName.replace('VM', 'Voleimiami');
   newTeamName = newTeamName.replace('ORANGE', 'Orange');
   newTeamName = newTeamName.replace('GREEN', 'Green');
   newTeamName = newTeamName.replace('ASICS', 'Asics');
   }

   if (newTeamName.startsWith('Volley One')) {
   newTeamName = newTeamName.replace(' Volleyball Academy', '');
   newTeamName = newTeamName.replace(' Volleyball Club', '');
   newTeamName = newTeamName.replace(' VBC ', ' ');
   }

   if (newTeamName.startsWith('West FL')) {
   newTeamName = newTeamName.replace('West FL', 'West Florida');
   }

   if (newTeamName.startsWith('West Georgia')) {
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

   if (newTeamName.startsWith('WGVA')) {
   newTeamName = newTeamName.replace('WGVA', 'West Georgia');
   }

   if (newTeamName.startsWith('WKVC')) {
   newTeamName = newTeamName.replace('WKVC', 'West Kentucky');
   }

   if (newTeamName.startsWith('WVA ')) {
   newTeamName = newTeamName.replace('WVA ', 'Wisconsin Volleyball Academy ');
   }

   if (newTeamName.startsWith('WBVA ')) {
   newTeamName = newTeamName.replace('WVBA ', 'Washington Volleyball Academy ');
   }
   */

}

export default function fixClubName(teamName, eventType) {
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

  if ((newTeamName.startsWith('GA5')) || (newTeamName.startsWith('A5 Mizuno'))) {
    newTeamName = fixTeamName(newTeamName);
  }

  newTeamName = newTeamName.replace(' F1', ' 1');
  newTeamName = newTeamName.replace(' M1', ' 1');

  return newTeamName;
}
