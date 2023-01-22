pragma solidity ^0.6.0;

contract SupplyChain {
    
    struct Product{
        address manufacturer;
        string manufacturer_name;
        string productName;
        uint256 productId;
        string date;
        string weight;
        string dimensions;
        string location;
        uint256 number_of_states;
        mapping (uint256 => Status) positions;
    }
    
    struct Status{
        string description;
        string date;
        address person; 
    }
    
    mapping(uint => Product) ListOfProducts;
    uint256 items=0;

    
    
    function addProduct(string memory _productName, string memory _manName, string memory _date_of_manufacture,string memory _weight, string memory _dimensions, string memory _loc) public returns(bool)  {
        Product memory newItem = Product({manufacturer: msg.sender,manufacturer_name:_manName, number_of_states: 0
            ,productName: _productName, productId: items, date: _date_of_manufacture, weight:_weight, dimensions:_dimensions, location:_loc});
        ListOfProducts[items]=newItem;
        items = items+1;
        return true;
    }
    
    function addStatus(uint _productId, string memory info, string memory _date) public returns (bool) {
        require(_productId<=items);
        
        Status memory newStatus = Status({person: msg.sender, description: info,date:_date });
        
        ListOfProducts[_productId].positions[ ListOfProducts[_productId].number_of_states ]=newStatus;
        
        ListOfProducts[_productId].number_of_states = ListOfProducts[_productId].number_of_states +1;
        return true;
    }
    
    function displayProdInfo(uint _productId) public view returns (string memory) {

        string memory a=ListOfProducts[_productId].productName;
        string memory b=ListOfProducts[_productId].manufacturer_name;
        string memory c=ListOfProducts[_productId].date;
        string memory d=ListOfProducts[_productId].weight;
        string memory e=ListOfProducts[_productId].location;
        string memory f=ListOfProducts[_productId].dimensions;
        string memory output;
        output=string(abi.encodePacked(a,",", b, ",",c,",",d,",",e,",",f,","));
        for (uint256 j=0; j<ListOfProducts[_productId].number_of_states; j++){
             string memory temp=ListOfProducts[_productId].positions[j].description;
             string memory temp1=ListOfProducts[_productId].positions[j].date;
             output=string(abi.encodePacked(output,"~",temp," ",temp1," "));
        }
        return output;
    }
    
}