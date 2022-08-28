const Author = (props) => {
    
	return <p className={`quote__author ${props.color}`}>{props.author}</p>;
    
};

export default Author;
