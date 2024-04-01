import clsx from "clsx";

function getClassName({className}){
    return clsx("bg-newgreen text-lightcream hover:bg-dark rounded-md px-2 py-2 hover:[#5D5D5D] hover:text-white transition-colors transition-duration-300 cursor-pointer focus-outline-none focus-ring-2 focus-ring-opacity-50",
    className)
}

const sizes = {
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "w-full px-4 py-3"
};

const variants = {
    colour: "bg-color focus:ring-wht",
    outline: "bg-transparent text-dark border border-2 focus:ring-dk",
    whi: "bg-whi focus:ring-yel",
};


const Button = ({children,
    className,
    size,
    variant,
    ...rest
}) => {
    return(
    <button className= {clsx(
        sizes[size],
        variants[variant],
        getClassName({className})
    )}
    {...rest}
        >
        {children}
        </button>


    )
    
    
};


export default Button;