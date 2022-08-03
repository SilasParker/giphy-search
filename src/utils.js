export function getYearOptions(maxAge) {
    const years = [];
    const date = new Date();
    for(let i = 0; i < maxAge; i++) {
        years.push({id: date.getFullYear()-i});
    }

    return years.map((year) => {
        return <option value={year.id}>{year.id}</option>
    })
}