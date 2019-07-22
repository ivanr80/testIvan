console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(arrayStr, ...vars){
    
    let result = arrayStr[0];
    
    vars.forEach( (valori, index) => result += safe(valori) + arrayStr[index + 1]);
    
    return result;
    
    //vars[0] + arrayStr[0+1];
    
}

function safe(str)
{
    return str.replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}