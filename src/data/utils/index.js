import { factionIndexes } from '../atoms/factions';
import { setInfos } from '../atoms/sets';

const getDbIndexByWaveAndCard = (wave, card) => {
    return (`00` + wave).slice(-2) + (`000` + card).slice(-3);
}

export const getCardsByFactionAndSets = (faction, selectedSets, factionDefaultSet) => {
    const defaultFactionCards = faction !== 'universal' ? [factionDefaultSet] : [] 
    let cardIds = [];
    const setsWithFactionSet = [...selectedSets, ...defaultFactionCards];
    const fIndex = factionIndexes.indexOf(faction.startsWith('n_') ? faction.slice(2) : faction);
    for (let s of setsWithFactionSet) {
        const set = setInfos[s];
        if(set.hasOwnProperty(fIndex)) {
            cardIds = [...cardIds, ...set[fIndex].map(c => getDbIndexByWaveAndCard(set.wave, c))]
        }
    }

    return cardIds;
}
