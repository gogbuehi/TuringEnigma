const STANDARD_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
class Rotor {
  constructor(hardWiring) {
    const splitHardwiring = hardWiring.split('');
    this.mHardwiring = {};
    STANDARD_CHARACTERS.forEach((character, index) => this.mHardwiring[character] = splitHardwiring[index]);
  }
  encode(character) {
    return this.mHardwiring[character];
  }
  decode(character) {
    let decodedCharacter = null;
    Object.keys(this.mHardwiring).forEach(key => {
      if (this.mHardwiring[key] === character) decodedCharacter = key;
    });
    return decodedCharacter;
  }
}

export default Rotor;
