// Code EyesOnMe Component Here
function EyesOnMe(){
    function handleChange(event){
        console.log(`${event.target.focus}: ${event.target.blur}`);
    }


    return (
        <div>
            <form>
                <button onChange={handleChange} focus='Good!' blur='Hey! Eyes on me!' type='Eyes on me' />
            </form>
        </div>
    )
}
export default EyesOnMe