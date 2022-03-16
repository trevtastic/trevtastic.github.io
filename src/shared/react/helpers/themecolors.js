/**
 * This file is a part of the Promvc framework.
 * 
 * (c) ThemePlexi
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * The svg top-level container.
 * 
 * @since 1.0.0
 */
function themeColors()
{
	const rootStyle = getComputedStyle( document.body );

	return {
		backgroundColor: rootStyle.getPropertyValue( '--background-color' ),
		borderColor:     rootStyle.getPropertyValue( '--border-color' ),
		foregroundColor: rootStyle.getPropertyValue( '--foreground-color' ),
		glowColor:       rootStyle.getPropertyValue( '--glow-color' ),
		gradientColor1:  rootStyle.getPropertyValue( '--gradient-color-1' ),
		gradientColor2:  rootStyle.getPropertyValue( '--gradient-color-2' ),
		gradientColor3:  rootStyle.getPropertyValue( '--gradient-color-3' ),
		gradientColor4:  rootStyle.getPropertyValue( '--gradient-color-4' ),
		gradientColor5:  rootStyle.getPropertyValue( '--gradient-color-5' ),
		highlightColor:  rootStyle.getPropertyValue( '--highlight-color' ),
		inputBackground: rootStyle.getPropertyValue( '--input-background' ),
		muted:           rootStyle.getPropertyValue( '--muted' ),
		primaryColor:    rootStyle.getPropertyValue( '--primary-color' ),
		separatorColor:  rootStyle.getPropertyValue( '--separator-color' ),
		shadowColor:     rootStyle.getPropertyValue( '--shadow-color' ),
		textColor:       rootStyle.getPropertyValue( '--text-color' ),
		textDisabled:    rootStyle.getPropertyValue( '--text-disabled' ),
		textEmphasis:    rootStyle.getPropertyValue( '--text-emphasis' ),
		themeColor1:     rootStyle.getPropertyValue( '--theme-color-1' ),
		themeColor2:     rootStyle.getPropertyValue( '--theme-color-2' ),
		themeColor3:     rootStyle.getPropertyValue( '--theme-color-3' ),
		themeColor4:     rootStyle.getPropertyValue( '--theme-color-4' ),
		themeColor5:     rootStyle.getPropertyValue( '--theme-color-5' ),
		themeColor6:     rootStyle.getPropertyValue( '--theme-color-6' ),
	};
}

/**
 * Module exports
 */
export { themeColors };