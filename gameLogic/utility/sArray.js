module.exports = class sArray extends Array
{
    sJoin(separator, endSeparator)
    {
        let result = '';
        const length = this.length;
        for(const index in this)
        {
            
            if(length == 2 && index == 0)
            {
                
                result += `${this[index]} ${endSeparator}`;
            }
            else if(index < (length - 2))
            {
                result += `${this[index]}${separator}`;
            }
            else if(index == length -2)
            {
                result += `${this[index]}${separator}${endSeparator}`;
            }
            else
            {
                result += `${this[index]}`
            }
       }
        return result;
    }
}