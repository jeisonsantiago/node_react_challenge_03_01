const formatData = (value: string): string => {

    const regex = RegExp("[0-9]{1,}-[0-9]{1,}-[0-9]{1,}");
    const result = regex.exec(value)?.toString().split('-');
    
    if(result){
        const res = result[2]+"/"+result[1]+"/"+result[0];
        // console.log(res);
        return res;
    }

    return '';
}
export default formatData;