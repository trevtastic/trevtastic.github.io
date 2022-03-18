/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import CtaModal from '../../components/modals/cta.js';
import Svg from '../../components/icons/svg.js';

/**
 * Declare private properties
 * @private
 */

/**
 * The client-side front component.
 * 
 * @since 1.0.0
 */
function ComingSoon( props )
{
	// Refs
	const mounted = useRef();
	const reveal = useRef( null );

	/**
	 * Reveal hidden content.
	 */
	function showContent()
	{
		if ( ! reveal ) {
			return;
		}

		const container = reveal.current;

		if ( container.classList.contains( 'js-reveal--scale-out' ) )
		{
			container.style.visibility = 'visible';
			container.style.transform = 'scale(1)';
			container.style.opacity = '1';
		}
	}

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidMount? componentWillUnmount?
	 */
	useEffect(() => {

		// componentDidMount
		showContent();

	}, []);

	/**
	 * Handle component lifecycle
	 * 
	 * componentDidUpdate?
	 */
	useEffect(() => {

		if ( ! mounted.current ) {
			mounted.current = true;
		} else {
			// componentDidUpdate
		}

	});

	/**
	 * Render component
	 * 
	 * @return object
	 */
	return (
		<div>
			<div className="o-section-overlay o-section-overlay--media o-section-overlay--youtube">
				<div id="page-youtube">
					<img src="/assets/img/bg/hot_coals.jpg" />
				</div>
			</div>
			<div className="o-section-overlay u-bg-black u-op-8"></div>
			<CtaModal />
			<header></header>
			<div className="o-container-fluid">
				<div className="o-row">
					<div id="info" className="o-col-md-12 o-page-info">
						<div className="o-vert-middle">
							<div ref={reveal} className="js-reveal js-reveal--scale-out">
								<div className="u-pb-3">
									<Svg className="o-logo" target="#logo-jam" color="#fff" viewBox="0 0 140 171" />
								</div>
								<div className="u-pb-3">
									<h2 className="e-headline"><span style={{fontWeight: 300}}>We&apos;re launching our</span><br />new Website</h2>
									<p className="e-description">We&apos;re coming soon! Awesome template to present your future product or service.<br />We&apos;re working hard to give you the best experience!</p>
								</div>
								<div className="o-btn-row u-pb-3">
									<button className="e-btn e-btn--md e-btn--highlight">Notify Me</button>
									<Link
										className="e-btn e-btn--md e-btn--outline-white"
										to="/abc"
									>
										More Info
									</Link>
									{/* <a className="e-btn e-btn--md e-btn--outline-white">More Info</a> */}
								</div>
								<div className="u-pt-3">
									<a href="#" className="e-btn e-btn--social-link">
										<i className="bi-facebook"></i>
									</a>
									<a href="#" className="e-btn e-btn--social-link">
										<i className="bi-twitter"></i>
									</a>
									<a href="#" className="e-btn e-btn--social-link">
										<i className="bi-google"></i>
									</a>
									<a href="#" className="e-btn e-btn--social-link">
										<i className="bi-behance"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="content" className="o-col-md-6"></div>
				</div>
			</div>
		</div>
	);
}

/**
 * Module exports
 * @public
 */
export default ComingSoon;