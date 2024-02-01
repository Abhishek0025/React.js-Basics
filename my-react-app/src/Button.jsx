//STYLE REACT COMPONENTS WITH CSS

// 1. EXTERNAL (Good for global styles)
// 2. MODULES (Preferred for indiviual components having unique styles)
// 3. INLINE (Minimal styling)

// MODULES AND EXTERNAL CSS ARE PREFERRED
function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        // <button className={styles.button}>Click me</button>
        <button style={styles}>Click me</button> //INLINE CSS 
    );
}

export default Button;