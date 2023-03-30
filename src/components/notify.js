export const notifications = {
    namespaced:true,
    state: {
        //  Example:  {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2},
        notices: [ ]
    },

    getters: {
        notices: state => state.notices
    },

    mutations: {
        newData: (state, notice) => {
            let id = state.notices.length + 1;
            notice.id = id;
                    
            const types = ['primary','secondary','success','danger','warning','info','light','dark'];
            const randomType = Math.floor(Math.random()*types.length);
            notice.type = types[randomType];
            notice.text = 'Lorem ipsum dolor sit amet.';

            state.notices.push(notice)
            console.log('Added notice:', notice)
            console.log('notices', state.notices)
        },
    },

    actions: {
        async new({ commit }, notice) {
            commit("newData", notice);
        },
        get({state},id) {
            let notice = state.notices.filter(notice => notice.id === id);
            return notice;
        },
        destroy({state},id) {
            state.notices.forEach((data,i) => {
                if(data.id === id) {
                    state.notices.splice(i,1);
                }
            })
        }

    }
}