# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true, index: true|

- has_many: messages
- has_many: groups, through:　:groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|user｜references| foreign_key: true|
|group|references| foreign_key: true｜
|image|text｜

- belongs_to:　user
- belongs_to:　group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user_id|references|foreign_key: true|

- has_many: users, through:　:groups_users
- has_many: messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|foreign_key: true|
|group|references|foreign_key: true|　

### Association
- belongs_to :group
- belongs_to :user




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
