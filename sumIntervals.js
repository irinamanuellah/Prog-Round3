export function sumIntervals(intervals) {
    let totalLength = 0;

    if (intervals == 0) { return 0; }
    for (let i = 0; i <= intervals.length - 1; i++) {
        const currentInterval = intervals[i];
        
    let overlap = false;

    // Parcourir les intervalles précédents
    for (let j = 0; j < i; j++) {
        const previousInterval = intervals[j];

        if (intervals.length == 1) {
            intervals.join().split('')
            return (intervals.lenght[1][1] - intervals[1][0])
        }

      // Vérifier s'il y a un chevauchement
      if (
        currentInterval[0] <= previousInterval[1] &&
        currentInterval[1] >= previousInterval[0]
      ) {
        overlap = true;
        break;
      }
    }

    if (!overlap) {
      // Ajouter la longueur de l'intervalle non chevauchant
      totalLength += currentInterval[1] - currentInterval[0];
    }
  }

 
    return array[1]-array[0];

}