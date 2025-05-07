const TOTAL_OBJECTS = 20;

const objectData = [];

for (let i = 1; i <= TOTAL_OBJECTS; i++) {
    objectData.push({
        countID: i,
        name: `Objeto ${i}`,
        description: `Descripción ${i}`,
    });
}

export default objectData;