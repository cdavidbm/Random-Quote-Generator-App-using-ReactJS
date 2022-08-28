const Button = (props) => {

	return (
		<div className="container-btn">
			<button className={`quote__btn ${props.bg}`} onClick={props.changeColors}>
				<i className="bx bx-chevron-right"></i>
			</button>
		</div>
    );
    
};

export default Button;
