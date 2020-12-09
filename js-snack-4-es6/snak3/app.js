let bici = [
    {
        nome : "alfreda",
        peso : 22,
    },
    {
        nome : "gianna",
        peso : 12,
    },
    {
        nome : "ushuri",
        peso : 14,
    },
    {
        nome : "freddy",
        peso : 18,
    },
    {
        nome : "mark",
        peso : 16,
    }
];


const min = bici.reduce(function(prev, current) {
    return (current.peso < prev.peso) ? current : prev
}) //returns object

console.log(min);

