function reportByPosition(players) {

    let goals = 5;

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");

    let part = players
        .map(p => {
            let parts = p.split(" - ");
            return [
                parts[0],                
                parts[1],                
                Number(parts[2]),       
                Number(parts[3]),       
                Number(parts[4])      
            ];
        })
        .filter(p => p[2] >goals);

    const positions = part
        .map(p => p[1])
        .filter((pos, index, arr) => arr.indexOf(pos) === index)
        .sort();

    positions.forEach(position => {
        let group = parsed.filter(p => p[1] === position);
        let totalGoals = group.reduce((sum, p) => sum + p[2], 0);
        let totalAssists = group.reduce((sum, p) => sum + p[3], 0);
        let totalMatches = group.reduce((sum, p) => sum + p[4], 0);

        let avg = (totalGoals + totalAssists) / totalMatches;

        let roundedAvg = Math.round(avg * 100) / 100;

        console.log(position + ":\n");
        console.log("- Số cầu thủ:", group.length);
        console.log("- Tổng bàn thắng:", totalGoals);
        console.log("- Tổng kiến tạo:", totalAssists);
        console.log("- Tổng số trận:", totalMatches);
        console.log("- Trung bình hiệu suất/trận:", roundedAvg);
        console.log("\n");
    });

    let totalGoals = parsed.reduce((sum, p) => sum + p[2], 0);
    console.log("Tổng bàn thắng toàn đội :", totalGoals);
}

reportByPosition(players);