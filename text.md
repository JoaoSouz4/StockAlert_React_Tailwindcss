removeCategorieItems: async () => {
            setIsFetching(true);
            await remove(currentList)
                .then(res => {
                    
                    setDefaultList(res.requestData.currentList)
                    setAmount(res.requestData.currentAmount)
                    setIsFetching(false)

                })
        }

        removeItem: (nameItem: string) => {
            setIsFetching(true);
            removeOneItem(nameItem, currentList)
                .then(res => {
                    setList(res.requestData.currentList);
                    setAmount(res.requestData.currentAmount);
                    setIsFetching(false);
                })
        }
    }