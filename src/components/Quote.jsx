const Quote = (props) => {

	return (
		<div>
			<div className="quote">
				<span className={`quote__icon ${props.color}`}>
					<i className="bx bxs-quote-left"></i>
				</span>
				<p className={`quote__text ${props.color}`}>{props.quote}</p>
			</div>
		</div>
    );
    
};

export default Quote;
