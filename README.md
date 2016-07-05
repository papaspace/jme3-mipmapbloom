# jme3-mipmapbloom
Author: Michael Braunstingl (aka Apollo), 2016,
altered version of jMonkeyEngine's BloomFilter by Rémy Bouquet (aka Nehon)

This is a bloom filter based on the generation of mipmaps of the brightpass. There is only a single source file:
mj.jmex.visualfx.MipmapBloomFilter.java, which is an extension of jMonkeyEngine's FilterPostProcessor, placed in the src folder.

Place the MatDefs/ folder and its contents into your Assets/ directory, just as shown in this git repo.

For a more documentation visit the javadoc of the MipmapBloomFilter.java file.
