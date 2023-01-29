import type hiddenMetadata from "./hiddenMetadata";

enum NFTType {
    Ethereum,
    IMX, 
    Solana,
    Loopring
}


type NFT = {
    imageURL: string;
    name: string;
    description: string;
    collection:string;
    nftType: NFTType;
    index:number;
    creator:string;
    externalUrl:string;
    attributes: [{
        type: string,
        value: any
    }]
};

export type { NFT }
export { NFTType};