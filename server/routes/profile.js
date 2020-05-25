import i18next from 'i18next';
import User from '../entity/User.js';
import encrypt from '../lib/secure.js';
import _ from 'lodash';

export default (app) => {
    app
    .get('/profile', { name: 'profile' }, async (req, reply) => {
        const userId = req.session.get('userId');
        if (!userId) {
            req.flash('error', i18next.t('flash.profile.authorization'));
            return reply.redirect(app.reverse('newSession'));
          }
        const user = await User.findOne(userId);
        reply.render('profile/index', { user });
        return reply;
    })
    .patch('/profile', async (req, reply) => {
        const userId = req.session.get('userId');
        const user = await User.findOne(userId);
        const updatedData = _.pickBy(req.body.user, (value, key) => value);
        if (updatedData.password) {
            updatedData.passwordDigest = encrypt(updatedData.password);
        }
        const updatedUser = _.defaults(updatedData, user);
        await User.save(updatedUser);

        req.flash('info', i18next.t('flash.profile.update.success'));
        return reply.redirect(app.reverse('users'));
    })
    .delete('/profile', async (req, reply) => {
        const userId = req.session.get('userId');
        await User.delete(userId);
        req.session.set('userId', null);
        req.flash('info', i18next.t('flash.profile.delete.success'));
        return reply.redirect(app.reverse('root'));
    })
};