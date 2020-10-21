module.exports = class job
{
    constructor(data = null)
    {
        if(!data)
        {
            data = {};
        }
        let {name, desc,base_stats, abilities} = data;
        if(!base_stats)
        {
            base_stats = {}
        }
        // if(!base_gear)
        // {
        //     base_gear = {};
        // }
        const {str,dex,int,stam,will,agi,cha} = base_stats;
        // const {helm,gloves,boots,chest,leggings,mainhand,offhand} = base_gear;
        this.name = name || "Indescribable"
        this.desc = desc || "Sometimes what we do doesn't make sense at all.";
        this.base_stats = {

            str:str || 0,
            dex:dex || 0,
            int:int || 0,
            stam:stam || 0,
            will:will || 0,
            agi:agi || 0,
            cha:cha || 0

        };
        // this.base_inventory = base_inventory || []
        this.abilities = abilities || {};
        // this.base_gear = {
        //     helm: helm || null,
        //     gloves: gloves || null,
        //     boots:boots || null,
        //     chest:chest || null,
        //     leggings:leggings || null,
        //     mainhand:mainhand || null,
        //     offhand:offhand || null
        // }

    }
}