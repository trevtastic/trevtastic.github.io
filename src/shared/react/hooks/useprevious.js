import { useEffect, useRef } from 'react';

function usePrevious( value )
{
	// Refs
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

export default usePrevious;
