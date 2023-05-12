export function getTourism_stats(_, res) {
    res.send([{ "year": 2021, "province": "Córdoba" }])
}

export function findByyear(_, res) {
    res.send({ "year": 2021, "province": "Córdoba" })
}

