const generateOrderObject = ({
    email = "", 
    cart = [], 
    total = 0
}) => {
    return {
        buyer: {
            email: email,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;