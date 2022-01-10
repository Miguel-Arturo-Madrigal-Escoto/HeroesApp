import { heroes } from "../data/heroes"

export const geHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    console.log('getHeroByPublisher llamado')

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}