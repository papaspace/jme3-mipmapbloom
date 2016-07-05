uniform sampler2D m_Texture;  // The scene texture.
uniform sampler2D m_Texture1;
uniform sampler2D m_Texture2;
uniform sampler2D m_Texture3;
uniform sampler2D m_Texture4;
uniform sampler2D m_Texture5;
uniform sampler2D m_Texture6;
uniform sampler2D m_Texture7;
uniform sampler2D m_Texture8;
uniform float m_Weight1;
uniform float m_Weight2;
uniform float m_Weight3;
uniform float m_Weight4;
uniform float m_Weight5;
uniform float m_Weight6;
uniform float m_Weight7;
uniform float m_Weight8;
varying vec2 texCoord;        // The texture coordinate.


/**
 * Sum over eight textures with their specific weight factors.
 */
// =============================================================================
   void main()
// =============================================================================
{  gl_FragColor=texture2D(m_Texture, texCoord)
    +m_Weight1*texture2D(m_Texture1, texCoord)
    +m_Weight2*texture2D(m_Texture2, texCoord)
    +m_Weight3*texture2D(m_Texture3, texCoord)
    +m_Weight4*texture2D(m_Texture4, texCoord)
    +m_Weight5*texture2D(m_Texture5, texCoord)
    +m_Weight6*texture2D(m_Texture6, texCoord)
    +m_Weight7*texture2D(m_Texture7, texCoord)
    +m_Weight8*texture2D(m_Texture8, texCoord);
} // main ======================================================================